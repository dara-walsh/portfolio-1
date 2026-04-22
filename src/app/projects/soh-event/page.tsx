
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import AnimatedSection from '@/components/about/AnimatedSection';

const ProjectOverview = dynamic(() => import("./sections/ProjectOverview"), { suspense: true });
const TechnicalStack = dynamic(() => import("./sections/TechnicalStack"), { suspense: true });
const InformationArchitecture = dynamic(() => import("./sections/InformationArchitecture"), { suspense: true });
const SemiAutomatedAdmin = dynamic(() => import("./sections/SemiAutomatedAdmin"), { suspense: true });
const PostEventProcessing = dynamic(() => import("./sections/PostEventProcessing"), { suspense: true });
const Sponsorship = dynamic(() => import("./sections/Sponsorship"), { suspense: true });
const SecurityCompliance = dynamic(() => import("./sections/SecurityCompliance"), { suspense: true });
const DesignUsability = dynamic(() => import("./sections/DesignUsability"), { suspense: true });
const Outcomes = dynamic(() => import("./sections/Outcomes"), { suspense: true });

export default function SOHEventPage() {
  return (
    <div className="prose mx-auto p-8 pt-32 md:pt-36">
      <div className="mb-12 flex justify-center">
        <div style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1174753351?h=3bb80ac491&autoplay=1&muted=1&title=0&byline=0&portrait=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="SOH Event Hero Video"
            style={{ width: '100%', height: '100%', display: 'block' }}
          ></iframe>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontSize: '2.8rem',
                fontWeight: 800,
                textShadow: '0 4px 32px rgba(0,0,0,0.7)',
                textAlign: 'center',
                lineHeight: 1.1,
                padding: '0 2vw',
                letterSpacing: '-0.02em',
                maxWidth: '90%',
              }}
            >
              Sylvester O’Halloran Perioperative Symposium Website
            </h1>
          </div>
        </div>
      </div>
      <div className="space-y-20">
        <AnimatedSection animation="fade-up"><Suspense fallback={<div>Loading section…</div>}><ProjectOverview /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.05}><Suspense fallback={<div>Loading section…</div>}><TechnicalStack /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.1}><Suspense fallback={<div>Loading section…</div>}><InformationArchitecture /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.15}><Suspense fallback={<div>Loading section…</div>}><SemiAutomatedAdmin /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.2}><Suspense fallback={<div>Loading section…</div>}><PostEventProcessing /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.25}><Suspense fallback={<div>Loading section…</div>}><Sponsorship /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.3}><Suspense fallback={<div>Loading section…</div>}><SecurityCompliance /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.35}><Suspense fallback={<div>Loading section…</div>}><DesignUsability /></Suspense></AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0.4}><Suspense fallback={<div>Loading section…</div>}><Outcomes /></Suspense></AnimatedSection>
      </div>
    </div>
  );
}