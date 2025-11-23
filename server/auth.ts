import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { authenticator } from 'otplib';
import QRCode from 'qrcode';
import { storage } from './storage';
import type { AdminUser } from '@shared/schema';
import type { Request, Response, NextFunction } from 'express';

// Configure Google OAuth Strategy
export function configurePassport() {
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const googleCallbackURL = process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/api/auth/google/callback';

  if (!googleClientId || !googleClientSecret) {
    console.warn('⚠️ Google OAuth not configured - GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET required');
    return;
  }

  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: googleCallbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) {
            return done(new Error('No email found in Google profile'), undefined);
          }

          // Check if user exists
          let user = await storage.getAdminUserByGoogleId(profile.id);

          if (!user) {
            // Check if user exists with this email
            user = await storage.getAdminUserByEmail(email);

            if (user) {
              // Link Google account to existing user
              user = await storage.updateAdminUser(user.id, {
                googleId: profile.id,
                profilePicture: profile.photos?.[0]?.value,
              });
            } else {
              // Create new admin user
              user = await storage.createAdminUser({
                email,
                googleId: profile.id,
                name: profile.displayName,
                profilePicture: profile.photos?.[0]?.value,
                mfaEnabled: false,
                isActive: true,
              });
            }
          }

          if (!user.isActive) {
            return done(new Error('User account is not active'), undefined);
          }

          // Update last login
          await storage.updateAdminUser(user.id, {
            lastLoginAt: new Date(),
          });

          return done(null, user);
        } catch (error) {
          return done(error as Error, undefined);
        }
      }
    )
  );

  // Serialize user to session
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  // Deserialize user from session
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await storage.getAdminUserById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
}

// Authentication middleware
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated?.() && req.user) {
    const user = req.user as AdminUser;
    if (user.isActive) {
      return next();
    } else {
      return res.status(403).json({ error: 'Account is not active' });
    }
  }
  return res.status(401).json({ error: 'Authentication required' });
}

// MFA required middleware
export function requireMFA(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated?.()) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const user = req.user as AdminUser;

  // Check if user has MFA enabled
  if (!user.mfaEnabled) {
    return next(); // MFA not required if not enabled
  }

  // Check if MFA is verified in session
  const session = req.session as any;
  if (session?.mfaVerified) {
    return next();
  }

  return res.status(403).json({
    error: 'MFA verification required',
    mfaRequired: true
  });
}

// MFA utilities
export const MFA = {
  // Generate MFA secret
  generateSecret(): string {
    return authenticator.generateSecret();
  },

  // Generate QR code for MFA setup
  async generateQRCode(email: string, secret: string): Promise<string> {
    const otpauth = authenticator.keyuri(email, 'Janio CMS', secret);
    return await QRCode.toDataURL(otpauth);
  },

  // Verify MFA token
  verifyToken(token: string, secret: string): boolean {
    try {
      return authenticator.verify({ token, secret });
    } catch (error) {
      return false;
    }
  },
};

// Admin-only middleware (for future super admin features)
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated?.()) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  // For now, all authenticated admin users are admins
  // In the future, we can add role-based access control
  return next();
}

// Type augmentation for Express Request
declare global {
  namespace Express {
    interface User extends AdminUser {}
  }
}
