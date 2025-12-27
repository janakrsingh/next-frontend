'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.from('.fade-up', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.fade-up',
        start: 'top 85%',
      },
    });
  }, []);

  return <>{children}</>;
}
