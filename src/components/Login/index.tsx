'use client';

import { MagicLink } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const LoginComponent = () => {
  const supabase = createClientComponentClient();

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
      <MagicLink
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa, style: { input: { width: '300px' } } }}
        providers={null!}
      />
    </div>
  );
};
