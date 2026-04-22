import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { opacity, slideUp } from './anim';
import RoundedButton from '@/components/animations/roundedButton';
import Link from 'next/link';

export default function Description() {
  const phrase1 =
    'A software engineer with a passion for innovation and\n' +
    'cutting-edge technology.\n\n ';

  const phrase2 =
    'Particularly interested in the intersection of art, design, and ' +
    'software. I believe that these disciplines can be combined to ' +
    'create truly transformative experiences.';
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="relative flex flex-col justify-center gap-12 p-8 sm:mt-[200px] sm:flex-row sm:p-20 "
    >
      <div className="space-y-4">
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          I’m Dara Walsh, a biomedical communicator specialising in the accurate translation of complex scientific and medical information. I combine evidence‑based research with strategic communication and visual design to support education, public engagement, and knowledge dissemination across healthcare and biomedical contexts.
        </p>
        <p className="m-0 gap-2 leading-snug sm:text-4xl">
          {phrase2.split(' ').map((word, index) => (
            <span
              key={index}
              className="relative mr-1.5 inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
      <div>
        <motion.p
          variants={opacity}
          animate={isInView ? 'open' : 'closed'}
          className="m-0 text-lg font-light"
        >
          I bring interdisciplinary expertise across surgical and medical specialties, collaborating on perioperative projects with multidisciplinary clinical teams.
        </motion.p>
        <div data-scroll-speed={0.1}>
          <Link href={'/about'}>
            <RoundedButton className="mt-6 flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-secondary text-white hover:bg-accent sm:mt-16 sm:h-[200px] sm:w-[200px]">
              <span className="text-xl sm:text-3xl">About me</span>
            </RoundedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
