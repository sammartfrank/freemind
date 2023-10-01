import { User } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default function Navbar({ user }: { user: User | null }) {
  if (!user) return null;
  return (
    <div className='flex flex-row justify-between container mx-auto'>
      <Link className='text-xl font-bold' href='/dashboard'>
        FreeMind
      </Link>
      <div className=''>{user?.email}</div>
    </div>
  );
}
