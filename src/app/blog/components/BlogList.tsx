'use client';

import { type BlogPost } from '../types';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No posts found</p>
      </div>
    );
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      <motion.div
        className="flex items-baseline justify-between"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-6xl font-bold tracking-tight">Family Reunions</h1>
        <a href="#" className="text-base underline underline-offset-4">
          view more
        </a>
      </motion.div>
      <div style={{width:'100%',height:'120vw',maxHeight:'1200px',position:'relative',marginBottom:'1rem'}}>
        <iframe
          src="https://vimeo.com/showcase/8929343/embed2"
          allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer; clipboard-write; encrypted-media; web-share"
          frameBorder="0"
          style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
          allowFullScreen
          title="Family Reunions Vimeo Showcase"
        ></iframe>
      </div>

      {/* Cards removed as requested */}
    </div>
  );
}
