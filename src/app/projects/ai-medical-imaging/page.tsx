
import Image from 'next/image';

import Hero3DClient from './Hero3DClient';
import AnimatedSection from '@/components/about/AnimatedSection';

export default function AIMedicalImagingPage() {
  return (
    <div className="prose mx-auto p-8 mt-24">
      {/* Hero Video - Styled like other projects */}
      <div className="mb-12 flex justify-center">
        <div style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/644369115?h=4d620b9c24&autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0&playsinline=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="AI Medical Imaging Hero Video"
            style={{ width: '100%', height: '100%', display: 'block' }}
            playsInline
            autoPlay
          />
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
              AI Medical Imaging – MONAI / MONAILabel
            </h1>
          </div>
        </div>
      </div>
      <AnimatedSection animation="fade-up">
      <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 40 }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '1.15rem' }}>
            This project focuses on the development of a medical AI system for automatic segmentation of DICOM imaging data,
            specifically targeting the mesenteric domain. Working in conjunction with TotalSegmentator, the model enables
            detailed anatomical segmentation of abdominal structures and supports advanced quantification of abdominal fat
            deposits, including mesenteric, retromesenteric, and subcutaneous fat. These quantitative outputs can be used to
            build patient&#8209;specific anatomical models and to investigate relationships between fat distribution, health,
            and disease. The project demonstrates the potential of AI&#8209;driven imaging tools to enhance clinical research
            and support precision medicine.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <Hero3DClient />
        </div>
      </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.1}>
      <h2 className="font-bold">AI Medical Imaging – MONAI / MONAILabel</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <p style={{ flex: 2 }}>
          Exploring the living body can only be done in detail by specialists such as Radiologists and Surgeons. If such exploration were accessible to the non-specialist, it would accelerate knowledge generation and discovery.
        </p>
        <video
          src="/images/ai-medical-imaging/Dicom Scroll.mp4"
          width={200}
          height={80}
          style={{ flex: 1, minWidth: 120, borderRadius: 8 }}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.1}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, margin: '32px 0' }}>
        <Image src="/images/ai-medical-imaging/Figure 1 v4.png" alt="CT Reconstruction Example" width={300} height={180} style={{ flex: 1, minWidth: 120 }} />
        <div style={{ flex: 2 }}>
          <p>
            The problem with current CT reconstructions is that only the radio opaque parts of the CT are reconstructed and the radio lucent areas are generally ignored. This leaves large gaps in the reconstructions, and these gaps mainly consist of fat depots.
          </p>
          <p>
            We exploit the domain-based organisation of the abdomen to develop a framework by which to generate and distribute the first accurate and complete digital models of the abdomen of the living, individual subject, from computerised tomographic imaging.
          </p>
        </div>
      </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.1}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, margin: '32px 0' }}>
        <div style={{ flex: 2 }}>
          <h2>Slicer 3D and DICOM files</h2>
          <ul>
            <li><b>3D Slicer</b> is a free, open-source software for visualization, processing, segmentation, registration, and analysis of medical, biomedical, and other 3D images and meshes; and planning and navigating image-guided procedures.</li>
            <li><b>DICOM</b> is a technical standard for the digital storage and transmission of medical images and related information.</li>
          </ul>
          <p><b>Digital Imaging and Communications in Medicine</b></p>
        </div>
        <Image src="/images/ai-medical-imaging/Domains - Frame 4.jpg" alt="Domain-based Abdomen" width={300} height={180} style={{ flex: 1, minWidth: 120 }} />
      </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={0.1}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, margin: '32px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 80 }}>
          <Image src="/images/ai-medical-imaging/Monai.png" alt="MONAI Logo" width={320} height={128} style={{ marginBottom: 28 }} />
          <Image src="/images/ai-medical-imaging/Python_PyTorch.png" alt="Python PyTorch" width={320} height={128} />
        </div>
        <div style={{ flex: 2 }}>
          <h2>MONAI</h2>
          <ul>
            <li><b>Medical Open Network for AI</b></li>
            <li>MONAI is a freely available, community-supported, PyTorch-based framework for deep learning in healthcare imaging.</li>
          </ul>
          <h2>MONAI Label</h2>
          <p>
            MONAI Label is an intelligent image labeling and learning tool that uses AI assistance to reduce the time and effort of annotating new datasets. By utilizing user interactions, MONAI Label trains an AI model for a specific task and continuously learns and updates that model as it receives additional annotated images.
          </p>
        </div>
      </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={0.1}>
        <div style={{ width: '100%', marginTop: 48, textAlign: 'center' }}>
          <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: 24 }}>
            Monailabel Training Progression
          </h2>
          <img
            src="/images/ai-medical-imaging/Training AI.png"
            alt="Monailabel Training Progression"
            style={{ width: '100%', maxWidth: '100%', height: 'auto', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
          />
        </div>
      </AnimatedSection>
    </div>
  );
}