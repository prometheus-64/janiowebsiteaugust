import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/hooks/useAuth';
import { Shield, AlertCircle } from 'lucide-react';

export default function MFAVerify() {
  const { authenticated, mfaRequired, loading, verifyMFA } = useAuth();
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate('/admin/login');
    } else if (!loading && authenticated && !mfaRequired) {
      navigate('/admin/dashboard');
    }
  }, [authenticated, mfaRequired, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setVerifying(true);

    const result = await verifyMFA(token);

    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.error || 'Invalid verification code');
      setToken('');
      setVerifying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Two-Factor Authentication</CardTitle>
          <CardDescription>
            Enter the 6-digit code from your authenticator app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="token">Verification Code</Label>
              <Input
                id="token"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                placeholder="000000"
                value={token}
                onChange={(e) => setToken(e.target.value.replace(/\D/g, ''))}
                className="text-center text-2xl tracking-widest"
                required
                autoFocus
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={token.length !== 6 || verifying}
            >
              {verifying ? 'Verifying...' : 'Verify'}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Open your authenticator app and enter the 6-digit code</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
