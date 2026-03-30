'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    await authService.register({ name, email, password });
    router.push('/dashboard');
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4">
      <form onSubmit={submit} className="w-full space-y-4 rounded-lg border border-border bg-panel p-6">
        <h1 className="text-2xl font-bold">Register</h1>
        <input required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
        <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
        <button className="w-full rounded-md bg-accent py-2 font-semibold text-slate-900">Create Account</button>
        <p className="text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="text-accent">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
