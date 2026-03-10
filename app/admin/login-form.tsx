'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export function AdminLogin({
  onLogin,
}: {
  onLogin: (email: string, password: string) => boolean;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = onLogin(email, password);

    if (!isValid) {
      setError('Invalid credentials or inactive account.');
      return;
    }

    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="text-sm text-gray-500 mt-2">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@nursing.com"
              className="bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-700">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="bg-gray-50"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-2">
            Sign In
          </Button>
        </form>

      </motion.div>
    </div>
  );
}
