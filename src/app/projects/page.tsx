'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'AI Medical Imaging – MONAI / MONAILabel',
    tag: 'AI / Medical Imaging',
    href: '/projects/ai-medical-imaging',
    src: 'ai-medical-imaging/Domains - Frame 4.jpg',
    color: '#e8f0f7'
  },
  {
    title: 'Surgical Simulation Systems',
    tag: 'Simulation',
    href: '/projects/surgical-simulation',
    src: 'projects/surgical-simulation/P2_A.png', // updated preview image
    color: '#f7f3e8'
  },
  {
    title: 'Robotic Surgery Research & Applications',
    tag: 'Robotics',
    href: '/projects/robotic-surgery',
    src: 'projects/robotic-surgery/IMG_8838.JPG',
    color: '#e8f7f0'
  },
  {
    title: 'Mesentery: Advanced Anatomical Research',
    tag: 'Anatomy',
    href: '/projects/mesentery-research',
    src: 'projects/mesentery-research/Mesentery B&L 2023.png',
    color: '#f0e8f7'
  },
  {
    title: 'SOH Event: Design, Management & Coordination',
    tag: 'Event Management',
    href: '/projects/soh-event',
    src: 'projects/soh-event/Event Graphics 2025-10.png',
    color: '#f7e8e8'
  },
  // ...existing code...
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title={'My Work'}>
        <div className="m-0">
          <div className="m-0 overflow-hidden">
            {projects.map((project, index) => {
              return (
                <Link href={project.href} key={index}>
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                    src={project.src}
                  />
                </Link>
              );
            })}
          </div>
            <Modal projects={projects} />
            <div className="mt-12 text-center text-xl font-semibold text-gray-600">
              More Projects Coming Soon
            </div>
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}
