'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '../loadingIcon';

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
  return <>{children}</>;
}
