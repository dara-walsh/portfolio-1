'use client';

import TextDisperse from '@/app/contact/textDisperse/textDisperse';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ContactForm } from '@/app/contact/contactForm';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const background = useRef(null);
  const emailRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const setBackground = (isActive: any) => {
    gsap.to(background.current, { opacity: isActive ? 0.7 : 0 });
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const copyEmail = async () => {
    const email = 'dara.walsh@ul.ie';

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        fallbackCopy(email);
      }

      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      fallbackCopy(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const scrollToEmail = () => {
    const emailSection = document.getElementById('email');
    void copyEmail();
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="-mt-20 bg-foreground text-white ">
      <div className="flex min-h-screen w-full items-center justify-center pt-44 align-middle text-[8.6vw] xs:text-[5.6vw]">
        <div className="p-12 text-center xs:w-1/2 xs:p-0">
          <div className="uppercase">
            <p className="m-0">Dara Walsh</p>
            <p className="m-0">Biomedical Communicator</p>
          </div>
          <div className="flex justify-center uppercase">
            <Link href={'https://www.linkedin.com/in/dara-walsh-6570b8137/'}>
              <TextDisperse setBackground={setBackground}>
                <p>→Linkedin</p>
              </TextDisperse>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-1 uppercase">
            <TextDisperse
              setBackground={setBackground}
              onClick={() => {
                toast({
                  description:
                    'Email copied to clipboard, alternatively write your enquiry on the form!'
                });
                scrollToEmail();
              }}
            >
              <p className="m-0">→Email</p>
            </TextDisperse>

            <Link href={'https://www.ul.ie/ehs/medicine/mr-dara-walsh'}>
              <TextDisperse setBackground={setBackground}>
                <p>→University</p>
              </TextDisperse>
            </Link>
          </div>
          <div
            ref={background}
            className={clsx(
              'pointer-events-none absolute inset-0 h-full w-full bg-foreground text-[5.6vw] opacity-0'
            )}
          ></div>
        </div>
      </div>
      <div className="px-12 sm:px-56" id="email" ref={emailRef}>
        <ContactForm />
      </div>
    </div>
  );
}
