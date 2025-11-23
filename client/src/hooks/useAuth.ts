import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
  mfaEnabled: boolean;
}

interface AuthStatus {
  authenticated: boolean;
  mfaRequired?: boolean;
  user?: AuthUser;
}

export function useAuth() {
  const [authStatus, setAuthStatus] = useState<AuthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/status');
      const data = await response.json();
      setAuthStatus(data);
      return data;
    } catch (error) {
      console.error('Auth check failed:', error);
      setAuthStatus({ authenticated: false });
      return { authenticated: false };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = () => {
    window.location.href = '/api/auth/google';
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setAuthStatus({ authenticated: false });
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const verifyMFA = async (token: string) => {
    try {
      const response = await fetch('/api/auth/mfa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        await checkAuth();
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.error || 'Verification failed' };
      }
    } catch (error) {
      return { success: false, error: 'Network error' };
    }
  };

  return {
    ...authStatus,
    loading,
    login,
    logout,
    verifyMFA,
    checkAuth,
  };
}
