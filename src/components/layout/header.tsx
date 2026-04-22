'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Menu from '../nav';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isMobile } from '@/components/util';
import Magnetic from '@/components/animations/magnetic';
import Image from 'next/image';

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out'
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out'
          });
        }
      }
    });
  }, []);

  return (
    <>
      <div
        ref={header}
        className="absolute top-0 z-20 box-border flex w-full items-center p-4 font-light text-white lg:p-8"
      >
        <div className="flex lg:pr-56">
          <Link href={'/'} className="group z-10 flex items-center space-x-2">
            <Magnetic>
              <span style={{ color: '#1c75bc' }}>
                <Image
                  height={64}
                  width={64}
                  src="/images/DW_Logo1small.svg"
                  alt="DW Logo"
                  priority
                />
              </span>
            </Magnetic>
            {!isMobile() && (
              <div className="font-semibold text-lg pl-2 text-accent mix-blend-difference">Dara Walsh</div>
            )}
          </Link>
        </div>
        {!isMobile() && (
          <nav className="flex flex-1 items-center justify-end font-semibold space-x-8">
            <Magnetic>
              <Link href={'/about'} className="text-primary">About</Link>
            </Magnetic>
            <Magnetic>
              <Link href={'/projects'} className="text-primary">Projects</Link>
            </Magnetic>
            <Magnetic>
              <Link href={'/web'} className="text-primary">Web Gallery</Link>
            </Magnetic>
            <Magnetic>
              <Link href={'/blog'} className="text-primary">F&F</Link>
            </Magnetic>
            <Magnetic>
              <div className="flex items-center">
                <Link href={'/contact'} className="text-primary">Contact</Link>
                <ArrowUpRight size={18} />
              </div>
            </Magnetic>
          </nav>
        )}
      </div>
      {!isMobile() && (
        <div ref={button} className="fixed right-0 z-20 scale-0 transform">
          <Menu />
        </div>
      )}
      {isMobile() && (
        <div className="fixed right-2 z-20 transform">
          <Menu />
        </div>
      )}
    </>
  );
}
