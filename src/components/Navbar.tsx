'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authService } from '@/services/authService';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/sports', label: 'Sports' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/my-bets', label: 'My Bets' },
  { href: '/withdraw', label: 'Withdraw' },
  { href: '/admin', label: 'Admin' }
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    authService.logout();
    router.push('/login');
  };

  return (
    <header className="border-b border-border bg-panel/60 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/dashboard" className="text-lg font-bold text-accent">
          ShriExchange
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'text-accent' : 'text-slate-300 hover:text-white'}
            >
              {link.label}
            </Link>
          ))}
          <button onClick={logout} className="rounded-md bg-slate-800 px-3 py-2 hover:bg-slate-700">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
