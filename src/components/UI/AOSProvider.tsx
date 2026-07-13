'use client'; // यह केवल इस छोटे से कॉम्पोनेंट को क्लाइंट-साइड बनाएगा

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <>{children}</>;
}