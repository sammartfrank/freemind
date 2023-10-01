import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-pattern animate-drift'>
      <div className='flex flex-col items-center justify-center space-y-6 text-center'>
        <h1 className='text-5xl font-bold text-teal-600'>FreeMind</h1>
        <p className='text-xl text-teal-500'>Join us to address Mental Health.</p>
        <Link href='/login' className='px-8 py-3 font-semibold text-white bg-teal-500 rounded hover:bg-teal-600'>
          Get Started
        </Link>
      </div>
    </main>
  );
}
