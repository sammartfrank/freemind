import '../globals.css';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Sidebar } from '@/src/components/Sidebar';

export const metadata: Metadata = {
  title: 'Dashboard | FreeMind',
  description: 'Mental Health Dashboard',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/');
  }

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='w-full h-full'>
        <div className='p-4 h-full'>{children}</div>
      </div>
    </div>
  );
}
