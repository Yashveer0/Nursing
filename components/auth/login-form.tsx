'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/components/auth/auth-provider';
import { AuthShell } from '@/components/auth/auth-shell';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Email and password are required.');
      return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!isEmailValid) {
      setError('Enter a valid email address.');
      return;
    }

    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (!result.success) {
      setError(result.message ?? 'Login failed.');
      return;
    }

    router.push('/profile');
  };

  return (
    <AuthShell
      title="Welcome Back"
      description="Login to continue managing your account."
      altText="New here?"
      altLinkText="Create Account"
      altHref="/register"
    >
      <ScrollReveal>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
            className="h-11 bg-white"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="h-11 bg-white"
          />
        </div>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}

        <Button type="submit" className="h-11 w-full bg-primary hover:bg-red-600 hover:scale-[1.01] active:scale-[0.98] transition-transform" disabled={loading}>
          {loading ? 'Signing In...' : 'Login'}
        </Button>
      </form>
      </ScrollReveal>
    </AuthShell>
  );
}
