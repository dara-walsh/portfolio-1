import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const creativity = 'Old ';
const is = 'problems ';
const my = 'New ';
const craft = 'thinking';
const sentence3 = 'Shift the view. Change the outcome.';

function getDeterministicSpeed(word: string, index: number) {
  // Derive a stable pseudo-random value from word + index so SSR and client match.
  const seed = `${word}-${index}`;
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  const normalized = (Math.abs(hash) % 1000) / 1000;
  return 0.8 + normalized * (1.5 - 0.8);
}

function getRandomRotation() {
  return Math.random() * 60 - 30; // Random rotation between -30 and 30 degrees
}

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element, index: number) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed'))) *
        ScrollTrigger.maxScroll(window),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        invalidateOnRefresh: true,
        scrub: 0.5
      },
      rotation: getRandomRotation()
    });
  });
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className="letter text-[55px] font-semibold xs:text-[85px] xs:leading-none md:text-[115px] lg:text-[145px] xl:text-[205px] "
      data-speed={getDeterministicSpeed(word, index)}
    >
      {letter}
    </div>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    animateLettersOnScroll(containerRef);
  }, []);

  return (
    <div ref={containerRef} className="ml-8 scroll-smooth">
      <div className="-mt-28 mb-36 flex h-screen flex-col justify-end lg:mb-24">
        <div className="flex flex-wrap p-0">
          <LetterDisplay word={creativity} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={is} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={my} />
          <div className="w-2 xs:w-4 sm:w-10"></div>
          <LetterDisplay word={craft} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <LetterDisplay word={sentence3} />
      </div>
    </div>
  );
}
