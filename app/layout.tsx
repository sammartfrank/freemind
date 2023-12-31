import Navbar from '@/src/components/Navbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FreeMind',
  description: 'Mental Health application',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar user={user} />
        <div className='w-full'>{children}</div>
      </body>
    </html>
  );
}
