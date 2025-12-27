'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
