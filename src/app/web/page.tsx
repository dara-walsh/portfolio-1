'use client';

import React from 'react';
import Layout from '@/components/layout';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHero } from '@/components/ui/SectionHero';

// Work items data
const workItems = [
  {
    id: 'metabdomen',
    title: 'Anatomical 3D viewer',
    description:
      'Reconstructions from Dicoms and photogrammetry, And a collection of educational models',
    imagePath: '/images/gallery/Metabdomen.png',
    link: 'https://www.metabdomen.com/',
    tags: ['UI/UX Design', 'Java Scripts', 'Server Deployed']
  },
  {
    id: 'soh-event',
    title: "Sylvestor O'Halloran Event",
    description:
      'Annual Perioperative Symposium held in Limerick each year',
    imagePath: '/images/gallery/SOH206.png',
    link: 'https://soh.isrs.ie/',
    tags: ['WordPress', 'Event', 'Frontend/Backend']
  },
  {
    id: 'mesenteric-research',
    title: 'Mesenteric Research',
    description:
      'A collection of video/images related to published papers',
    imagePath: '/images/gallery/MES_RESEARCH.png',
    link: 'https://mesentery.ie/',
    tags: ['WordPress', 'Research']
  },
  {
    id: 'robotic-surgery',
    title: 'Robotic Surgery',
    description:
      'Irish Society of Robotic Surgery, A collection of information and news regarding robotic surgery in Ireland',
    imagePath: '/images/gallery/ISRS.png',
    link: 'https://isrs.ie/',
    tags: ['WordPress', 'Blog']
  },
  {
    id: 'mpgs-book',
    title: 'BOOK - Mesenteric Principles of Gastrointestional Surgery',
    description: 'Companion website for Mesenteric Textbook',
    imagePath: '/images/gallery/MPGS.png',
    link: 'https://mpgs.ie/',
    tags: ['WordPress', 'Companion']
  }
];

export default function Work() {
  return (
    <Layout title="Gallery">
      <div className="container mx-auto min-h-screen px-4 py-16">
        <SectionHero
          title="Research Website design and development"
          subtitle="I design, develop, and manage research-focused websites from concept to deployment."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item, index) => (
            <ProjectCard
              key={item.id}
              {...item}
              index={index}
              animated
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
