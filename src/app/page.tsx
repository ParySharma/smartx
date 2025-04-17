'use client';

// Libraries
import { useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NULL } from '@/utils/constancts';

const LandingPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname.startsWith('/')) {
      router.push('/home');
    }
  }, [pathname, router]);

  return NULL;
};
export default LandingPage;
