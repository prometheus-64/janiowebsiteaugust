import type { Express } from "express";
import { createServer, type Server } from "http";
import { webhookService, sanitizeString } from "./webhook";
import passport from "passport";
import { requireAuth, requireMFA, MFA } from "./auth";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Auto-configure webhook on server start (only if environment variables are set)
  const webhookUrl = process.env.WEBHOOK_URL || 'https://janio.app.n8n.cloud/webhook/ddf4a9ce-40ef-462c-8264-c582a28e3ae2';
  const webhookUsername = process.env.WEBHOOK_USERNAME || 'janiowebsiteleadform';
  const webhookPassword = process.env.WEBHOOK_PASSWORD;
  
  if (webhookUrl && webhookUsername && webhookPassword) {
    try {
      webhookService.configure({
        url: webhookUrl,
        username: webhookUsername,
        password: webhookPassword,
        timeout: parseInt(process.env.WEBHOOK_TIMEOUT || '10000'),
      });
      console.log('✅ Webhook configured successfully on server start');
      console.log(`   URL: ${webhookUrl}`);
    } catch (error) {
      console.error('❌ Failed to configure webhook on startup:', error);
    }
  } else {
    console.log('⚠️ Webhook not configured - missing environment variables');
  }

  // Contact form submission endpoint - webhook-only (no database storage)
  app.post("/api/contact", async (req, res) => {
    try {
      // Sanitize input data
      const sanitizedData = {
        name: sanitizeString(req.body.name),
        email: sanitizeString(req.body.email),
        company: sanitizeString(req.body.company),
        phone: req.body.phone ? sanitizeString(req.body.phone) : undefined,
        serviceInterest: req.body.serviceInterest ? sanitizeString(req.body.serviceInterest) : undefined,
        companySize: req.body.companySize ? sanitizeString(req.body.companySize) : undefined,
        message: req.body.message ? sanitizeString(req.body.message) : undefined,
        referrerPage: req.body.referrerPage ? sanitizeString(req.body.referrerPage) : undefined,
        referrerUrl: req.body.referrerUrl ? sanitizeString(req.body.referrerUrl) : undefined,
        ctaSourceUrl: req.body.ctaSourceUrl ? sanitizeString(req.body.ctaSourceUrl) : undefined,
        userAgent: req.body.userAgent ? sanitizeString(req.body.userAgent) : undefined,
        submissionTimestamp: req.body.submissionTimestamp ? sanitizeString(req.body.submissionTimestamp) : undefined,
      };
      
      // Basic validation of required fields
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.company) {
        return res.status(400).json({ 
          success: false, 
          error: "Name, email, and company are required" 
        });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid email format" 
        });
      }
      
      // Debug webhook configuration
      console.log('🔍 Webhook Debug Info:');
      console.log('  - Is webhook configured?', webhookService.isConfigured());
      console.log('  - DISABLE_WEBHOOK env?', process.env.DISABLE_WEBHOOK);
      console.log('  - WEBHOOK_URL env?', process.env.WEBHOOK_URL ? 'SET' : 'NOT SET');
      console.log('  - WEBHOOK_USERNAME env?', process.env.WEBHOOK_USERNAME ? 'SET' : 'NOT SET');
      console.log('  - WEBHOOK_PASSWORD env?', process.env.WEBHOOK_PASSWORD ? 'SET' : 'NOT SET');
      
      // Send to webhook - REQUIRED for success
      const webhookDisabled = process.env.DISABLE_WEBHOOK === 'true';
      if (!webhookService.isConfigured()) {
        console.error('❌ Webhook not configured');
        return res.status(500).json({ 
          success: false, 
          error: "Lead capture system not configured. Please try again later." 
        });
      }
      
      if (webhookDisabled) {
        console.error('❌ Webhook disabled');
        return res.status(500).json({ 
          success: false, 
          error: "Lead capture system disabled. Please try again later." 
        });
      }
      
      console.log('📤 Attempting to send webhook...');
      try {
        // Generate proper UUID for submissionId
        const generateUUID = () => {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        };
        
        const webhookResult = await webhookService.send({
          ...sanitizedData,
          submissionId: generateUUID(),
          serverTimestamp: new Date().toISOString(),
        });
        
        if (webhookResult.success) {
          console.log('✅ Webhook delivered successfully');
          res.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." });
        } else {
          console.error('❌ Webhook failed:', webhookResult.error);
          res.status(500).json({ 
            success: false, 
            error: "Unable to submit your inquiry. Please try again or contact us directly." 
          });
        }
      } catch (error) {
        console.error('❌ Webhook delivery failed:', error);
        res.status(500).json({ 
          success: false, 
          error: "Unable to submit your inquiry. Please try again or contact us directly." 
        });
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      
      // Provide more detailed error information for debugging
      let errorMessage = "Something went wrong processing your submission";
      if (error instanceof Error) {
        console.error("Detailed error:", error.message);
        errorMessage = process.env.NODE_ENV === 'development' ? error.message : errorMessage;
      }
      
      res.status(500).json({ 
        success: false, 
        error: errorMessage
      });
    }
  });

  // Webhook configuration endpoint (protected - you might want to add authentication)
  app.post("/api/webhook/configure", async (req, res) => {
    try {
      const { url, username, password, timeout } = req.body;
      
      if (!url || !username || !password) {
        return res.status(400).json({ 
          success: false, 
          error: "URL, username, and password are required" 
        });
      }
      
      if (!url.startsWith('https://')) {
        return res.status(400).json({ 
          success: false, 
          error: "Webhook URL must use HTTPS" 
        });
      }
      
      webhookService.configure({
        url: sanitizeString(url),
        username: sanitizeString(username),
        password: sanitizeString(password),
        timeout: timeout || 10000,
      });
      
      res.json({ 
        success: true, 
        message: "Webhook configured successfully",
        url: url // Return URL for confirmation (but not credentials)
      });
    } catch (error) {
      console.error("Webhook configuration error:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Configuration failed" 
      });
    }
  });

  // Webhook status endpoint
  app.get("/api/webhook/status", async (req, res) => {
    res.json({
      success: true,
      configured: webhookService.isConfigured(),
      environment: {
        WEBHOOK_URL: process.env.WEBHOOK_URL ? 'SET' : 'NOT SET',
        WEBHOOK_USERNAME: process.env.WEBHOOK_USERNAME ? 'SET' : 'NOT SET',
        WEBHOOK_PASSWORD: process.env.WEBHOOK_PASSWORD ? 'SET' : 'NOT SET',
        WEBHOOK_TIMEOUT: process.env.WEBHOOK_TIMEOUT || 'NOT SET',
        DISABLE_WEBHOOK: process.env.DISABLE_WEBHOOK || 'NOT SET',
      }
    });
  });

  // ===== AUTHENTICATION ROUTES =====

  // Google OAuth login
  app.get("/api/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Google OAuth callback
  app.get("/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/admin/login?error=auth_failed" }),
    (req, res) => {
      const user = req.user as any;
      // If MFA is enabled, redirect to MFA verification
      if (user?.mfaEnabled) {
        res.redirect("/admin/mfa-verify");
      } else {
        res.redirect("/admin/dashboard");
      }
    }
  );

  // Check auth status
  app.get("/api/auth/status", (req, res) => {
    if (req.isAuthenticated?.()) {
      const user = req.user as any;
      res.json({
        authenticated: true,
        mfaRequired: user.mfaEnabled && !(req.session as any)?.mfaVerified,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          profilePicture: user.profilePicture,
          mfaEnabled: user.mfaEnabled,
        }
      });
    } else {
      res.json({ authenticated: false });
    }
  });

  // Logout
  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: "Logout failed" });
      }
      req.session?.destroy(() => {
        res.json({ success: true });
      });
    });
  });

  // ===== MFA ROUTES =====

  // Setup MFA - generate secret and QR code
  app.post("/api/auth/mfa/setup", requireAuth, async (req, res) => {
    try {
      const user = req.user as any;

      if (user.mfaEnabled) {
        return res.status(400).json({ error: "MFA already enabled" });
      }

      const secret = MFA.generateSecret();
      const qrCode = await MFA.generateQRCode(user.email, secret);

      // Store secret temporarily in session until verified
      (req.session as any).tempMfaSecret = secret;

      res.json({
        secret,
        qrCode,
        email: user.email,
      });
    } catch (error) {
      console.error("MFA setup error:", error);
      res.status(500).json({ error: "Failed to setup MFA" });
    }
  });

  // Enable MFA - verify token and enable
  app.post("/api/auth/mfa/enable", requireAuth, async (req, res) => {
    try {
      const user = req.user as any;
      const { token } = req.body;
      const tempSecret = (req.session as any).tempMfaSecret;

      if (!tempSecret) {
        return res.status(400).json({ error: "No MFA setup in progress" });
      }

      if (!token) {
        return res.status(400).json({ error: "Token required" });
      }

      const isValid = MFA.verifyToken(token, tempSecret);

      if (!isValid) {
        return res.status(400).json({ error: "Invalid token" });
      }

      // Save MFA secret to user
      await storage.updateAdminUser(user.id, {
        mfaSecret: tempSecret,
        mfaEnabled: true,
      });

      // Clear temporary secret
      delete (req.session as any).tempMfaSecret;
      (req.session as any).mfaVerified = true;

      res.json({ success: true, message: "MFA enabled successfully" });
    } catch (error) {
      console.error("MFA enable error:", error);
      res.status(500).json({ error: "Failed to enable MFA" });
    }
  });

  // Verify MFA token during login
  app.post("/api/auth/mfa/verify", requireAuth, async (req, res) => {
    try {
      const user = req.user as any;
      const { token } = req.body;

      if (!user.mfaEnabled || !user.mfaSecret) {
        return res.status(400).json({ error: "MFA not enabled" });
      }

      if (!token) {
        return res.status(400).json({ error: "Token required" });
      }

      const isValid = MFA.verifyToken(token, user.mfaSecret);

      if (!isValid) {
        return res.status(400).json({ error: "Invalid token" });
      }

      // Mark MFA as verified in session
      (req.session as any).mfaVerified = true;

      res.json({ success: true });
    } catch (error) {
      console.error("MFA verify error:", error);
      res.status(500).json({ error: "Failed to verify MFA" });
    }
  });

  // Disable MFA
  app.post("/api/auth/mfa/disable", requireAuth, requireMFA, async (req, res) => {
    try {
      const user = req.user as any;
      const { token } = req.body;

      if (!user.mfaEnabled || !user.mfaSecret) {
        return res.status(400).json({ error: "MFA not enabled" });
      }

      // Verify token before disabling
      const isValid = MFA.verifyToken(token, user.mfaSecret);

      if (!isValid) {
        return res.status(400).json({ error: "Invalid token" });
      }

      await storage.updateAdminUser(user.id, {
        mfaSecret: null,
        mfaEnabled: false,
      });

      delete (req.session as any).mfaVerified;

      res.json({ success: true, message: "MFA disabled successfully" });
    } catch (error) {
      console.error("MFA disable error:", error);
      res.status(500).json({ error: "Failed to disable MFA" });
    }
  });

  // ===== BLOG CRUD ROUTES =====

  // Get all blogs (public - published only, admin - all)
  app.get("/api/blogs", async (req, res) => {
    try {
      const isAdmin = req.isAuthenticated?.();
      const blogs = await storage.getAllBlogs(!isAdmin);
      res.json(blogs);
    } catch (error) {
      console.error("Get blogs error:", error);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  });

  // Get blog by ID or slug
  app.get("/api/blogs/:idOrSlug", async (req, res) => {
    try {
      const { idOrSlug } = req.params;
      let blog = await storage.getBlogById(idOrSlug);

      if (!blog) {
        blog = await storage.getBlogBySlug(idOrSlug);
      }

      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      // Check if published or user is admin
      if (!blog.isPublished && !req.isAuthenticated?.()) {
        return res.status(404).json({ error: "Blog not found" });
      }

      res.json(blog);
    } catch (error) {
      console.error("Get blog error:", error);
      res.status(500).json({ error: "Failed to fetch blog" });
    }
  });

  // Create blog (admin only)
  app.post("/api/blogs", requireAuth, requireMFA, async (req, res) => {
    try {
      const user = req.user as any;
      const blogData = {
        ...req.body,
        authorId: user.id,
        author: req.body.author || user.name,
      };

      const blog = await storage.createBlog(blogData);
      res.json(blog);
    } catch (error) {
      console.error("Create blog error:", error);
      res.status(500).json({ error: "Failed to create blog" });
    }
  });

  // Update blog (admin only)
  app.put("/api/blogs/:id", requireAuth, requireMFA, async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await storage.updateBlog(id, req.body);
      res.json(blog);
    } catch (error) {
      console.error("Update blog error:", error);
      res.status(500).json({ error: "Failed to update blog" });
    }
  });

  // Delete blog (admin only)
  app.delete("/api/blogs/:id", requireAuth, requireMFA, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteBlog(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Delete blog error:", error);
      res.status(500).json({ error: "Failed to delete blog" });
    }
  });

  // ===== CASE STUDY CRUD ROUTES =====

  // Get all case studies
  app.get("/api/case-studies", async (req, res) => {
    try {
      const isAdmin = req.isAuthenticated?.();
      const caseStudies = await storage.getAllCaseStudies(!isAdmin);
      res.json(caseStudies);
    } catch (error) {
      console.error("Get case studies error:", error);
      res.status(500).json({ error: "Failed to fetch case studies" });
    }
  });

  // Get case study by ID or slug
  app.get("/api/case-studies/:idOrSlug", async (req, res) => {
    try {
      const { idOrSlug } = req.params;
      let caseStudy = await storage.getCaseStudyById(idOrSlug);

      if (!caseStudy) {
        caseStudy = await storage.getCaseStudyBySlug(idOrSlug);
      }

      if (!caseStudy) {
        return res.status(404).json({ error: "Case study not found" });
      }

      if (!caseStudy.isPublished && !req.isAuthenticated?.()) {
        return res.status(404).json({ error: "Case study not found" });
      }

      res.json(caseStudy);
    } catch (error) {
      console.error("Get case study error:", error);
      res.status(500).json({ error: "Failed to fetch case study" });
    }
  });

  // Create case study (admin only)
  app.post("/api/case-studies", requireAuth, requireMFA, async (req, res) => {
    try {
      const caseStudy = await storage.createCaseStudy(req.body);
      res.json(caseStudy);
    } catch (error) {
      console.error("Create case study error:", error);
      res.status(500).json({ error: "Failed to create case study" });
    }
  });

  // Update case study (admin only)
  app.put("/api/case-studies/:id", requireAuth, requireMFA, async (req, res) => {
    try {
      const { id } = req.params;
      const caseStudy = await storage.updateCaseStudy(id, req.body);
      res.json(caseStudy);
    } catch (error) {
      console.error("Update case study error:", error);
      res.status(500).json({ error: "Failed to update case study" });
    }
  });

  // Delete case study (admin only)
  app.delete("/api/case-studies/:id", requireAuth, requireMFA, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteCaseStudy(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Delete case study error:", error);
      res.status(500).json({ error: "Failed to delete case study" });
    }
  });

  // ===== GUIDE CRUD ROUTES =====

  // Get all guides
  app.get("/api/guides", async (req, res) => {
    try {
      const isAdmin = req.isAuthenticated?.();
      const guides = await storage.getAllGuides(!isAdmin);
      res.json(guides);
    } catch (error) {
      console.error("Get guides error:", error);
      res.status(500).json({ error: "Failed to fetch guides" });
    }
  });

  // Get guide by ID or slug
  app.get("/api/guides/:idOrSlug", async (req, res) => {
    try {
      const { idOrSlug } = req.params;
      let guide = await storage.getGuideById(idOrSlug);

      if (!guide) {
        guide = await storage.getGuideBySlug(idOrSlug);
      }

      if (!guide) {
        return res.status(404).json({ error: "Guide not found" });
      }

      if (!guide.isPublished && !req.isAuthenticated?.()) {
        return res.status(404).json({ error: "Guide not found" });
      }

      res.json(guide);
    } catch (error) {
      console.error("Get guide error:", error);
      res.status(500).json({ error: "Failed to fetch guide" });
    }
  });

  // Create guide (admin only)
  app.post("/api/guides", requireAuth, requireMFA, async (req, res) => {
    try {
      const guide = await storage.createGuide(req.body);
      res.json(guide);
    } catch (error) {
      console.error("Create guide error:", error);
      res.status(500).json({ error: "Failed to create guide" });
    }
  });

  // Update guide (admin only)
  app.put("/api/guides/:id", requireAuth, requireMFA, async (req, res) => {
    try {
      const { id } = req.params;
      const guide = await storage.updateGuide(id, req.body);
      res.json(guide);
    } catch (error) {
      console.error("Update guide error:", error);
      res.status(500).json({ error: "Failed to update guide" });
    }
  });

  // Delete guide (admin only)
  app.delete("/api/guides/:id", requireAuth, requireMFA, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteGuide(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Delete guide error:", error);
      res.status(500).json({ error: "Failed to delete guide" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
