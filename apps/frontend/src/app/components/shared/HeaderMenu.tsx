'use client';

import Link from 'next/link';
import Logo from './Logo';
import UserMenu from './UserMenu';
import useUser from '@/app/data/hooks/useUser';

export default function HeaderMenu() {
  const { user } = useUser();

  return (
    <header className="self-stretch flex justify-center items-center h-24 bg-black/60">
      <nav className="flex items-center justify-between container">
        <Logo />
        <div>
          {user ? <UserMenu user={user} /> : <Link href="/entrar">Entrar</Link>}
        </div>
      </nav>
    </header>
  );
}
