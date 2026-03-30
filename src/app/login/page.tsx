'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      await authService.login({ email, password });
      router.push('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4">
      <form onSubmit={submit} className="w-full space-y-4 rounded-lg border border-border bg-panel p-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
        {error ? <p className="text-sm text-rose-400">{error}</p> : null}
        <button className="w-full rounded-md bg-accent py-2 font-semibold text-slate-900">Sign In</button>
        <p className="text-sm text-slate-400">
          No account?{' '}
          <Link href="/register" className="text-accent">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}
