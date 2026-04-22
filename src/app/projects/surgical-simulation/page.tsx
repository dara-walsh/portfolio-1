"use client";

import React, { useState } from "react";
import AnimatedSection from "@/components/about/AnimatedSection";

function ImageModal({ src, alt, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          borderRadius: 16,
          boxShadow: "0 2px 32px rgba(0,0,0,0.5)",
          background: "#fff",
        }}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

export default function SurgicalSimulationPage() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="prose mx-auto p-8 mt-24">

      {/* Hero Video - Styled like SOH Event */}
      <div className="mb-12 flex justify-center">
        <div style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/729406527?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&playsinline=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Surgical Simulation Hero Video"
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
              Surgical Simulation Systems
            </h1>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", marginTop: 48 }}>
        <AnimatedSection animation="fade-up">
        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 2, minWidth: 260 }}>
              <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 12 }}>
                Development of a laparoscopic surgical simulator for teaching/practice of inguinal hernia.
              </h2>
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>Background</h3>
              <p style={{ marginBottom: 12 }}>
                Transabdominal pre peritoneal inguinal hernia (TAPP) repair requires the surgeon to have good manual skills in laparoscopic surgery, as well as an understanding of the laparoscopic features and anatomy of groin anatomy. A realistic simulator for TAPP inguinal hernia repair would enhance surgeons&apos; training experience before they enter the operating theatre.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>Aim of project</h3>
              <p style={{ marginBottom: 12 }}>
                The aim of this project will be to create a novel, realistic, inexpensive, and easily reproducible simulator for teaching and practice of laparoscopic TAPP inguinal hernia repair.<br />
                The simulator would also act as an anatomical teaching aid for the pelvic region.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>Proposed methods</h3>
              <ul style={{ marginBottom: 12, paddingLeft: 0 }}>
                <li>Researching the TAPP procedure in theatre to understand the techniques and anatomy.</li>
                <li>Using CT/MRI to create a realistic 3D digital model of the groin and pelvic area and manufacturing an analogue laparoscopic simulation box using 3d printing and model making techniques.</li>
                <li>Investigations into biofidelic materials to allow for the most realistic visual and hepatic feedback for the user.</li>
                <li>Desktop search, literature review, TAPP and TEP teaching observations.</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400 }}>
              <img
                src="/images/projects/surgical-simulation/P2_Research.png"
                alt="Primary research photographs"
                style={{ width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
              />
              <div style={{ fontStyle: "italic", fontSize: "0.95em", marginTop: 8, textAlign: "center" }}>
                Figure: Selection of photographs taken during my primary research
              </div>
            </div>
          </div>
        </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 12 }}>IDEATION</h2>
          <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>Concept No. 6 - Virtual reality</h3>
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400 }}>
              <img
                src="/images/projects/surgical-simulation/P2%20Ideation%201.png"
                alt="Virtual reality concept for surgical theatre"
                style={{ width: "100%", height: "auto", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
              />
              <div style={{ fontStyle: "italic", fontSize: "0.95em", marginTop: 8, textAlign: "center" }}>
                Theatre model and VR headset for immersive learning
              </div>
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <p style={{ marginBottom: 12 }}>
                Visiting a surgical theatre can be intimidating for medical students. The dynamics of the theatre makes it difficult to understand what all the different equipment does and how it does it. This type of learning can be done in a VR space without all the distractions of a live theatre.<br /><br />
                Generating a 3d model of theatre in Cinema 4d and Sketchup and exporting it into the UnReal Engine (by Epic Games) the model can be explored in real world scale.<br /><br />
                Medical equipment and instruments use can be explained in detail giving the student a basic understanding of theatre before they ever enter a live surgery thus when they finally enter a live theatre they can concentrate more on the procedure taking place.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
            <div style={{ width: "100%", maxWidth: 600, position: "relative", paddingBottom: "28.125%", height: 0 }}>
              <iframe
                src="https://player.vimeo.com/video/648582392?h=16b669a620&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="MDP Virtual Reality"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
        {/* Final Concept Section */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 12 }}>Final Concept Anatomical Surgical Simulator</h2>
          <p style={{ marginBottom: 12 }}>
            This final concept has removed unnecessary anatomy to reduce manufacture (3D print) time. It provides an anatomically accurate simulation of laparoscopic hernia repair. The simulator can be used as an educational tool. The cage will give options for port placement to suit all users and preferences. A simple swap in/out module system will be used, with cheap and easily repairable or replaceable modules. It is suitable for testing out new equipment or meshes. Designed with the abdomen pre-insufflated (no expensive and dangerous pressurised gas required). Easy removal of the cage for teaching use by making the anatomy clearly visible. A realistic skin overlay can be used when not being used for teaching. Quick swap in/out modules allow users to spend more time developing their surgical skills. The module-based approach allows the user to start the learning process with easy repair procedures and graduate to more difficult hernia repair procedures. During initial assembly of the module, specific anatomical variants can be incorporated. This gives course creators the ability to teach specific repair techniques and how to avoid potential difficulties. The peritoneum and hernia sac can be easily and cheaply replaced between cases; it should take less than 5 minutes to replace, plus 15 minutes drying time.
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 32, alignItems: 'flex-start', justifyContent: 'center', marginTop: 24 }}>
            <img
              src="/images/projects/surgical-simulation/P2_A.png"
              alt="Final concept anatomical surgical simulator 1"
              style={{ maxWidth: 320, width: '100%', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              onClick={() => setModalImg({ src: '/images/projects/surgical-simulation/P2_A.png', alt: 'Final concept anatomical surgical simulator 1' })}
            />
            <img
              src="/images/projects/surgical-simulation/P2_B.png"
              alt="Final concept anatomical surgical simulator 2"
              style={{ maxWidth: 320, width: '100%', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              onClick={() => setModalImg({ src: '/images/projects/surgical-simulation/P2_B.png', alt: 'Final concept anatomical surgical simulator 2' })}
            />
            <img
              src="/images/projects/surgical-simulation/P2_C.png"
              alt="Final concept anatomical surgical simulator 3"
              style={{ maxWidth: 320, width: '100%', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              onClick={() => setModalImg({ src: '/images/projects/surgical-simulation/P2_C.png', alt: 'Final concept anatomical surgical simulator 3' })}
            />
          </div>
          {modalImg && (
            <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
          )}
        </section>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          {/* Validating Anatomy Models Section */}
          <section style={{ marginBottom: 40 }}>
                  <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 12 }}>VALIDATING ANATOMY MODELS</h2>
                  <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 8 }}>Comparing Anatomy Models</h3>
                  <p style={{ marginBottom: 12 }}>
                    From the video below we can see how the model compares to the real procedure.<br />
                    From initial view to final inspection the model look and reacts similar to the human anatomy. The peritoneum behaves comparable to each other allowing the user to practice techniques such as placing tension in the peritoneum while dissecting.<br />
                    These techniques will translate well into the operating theatre.<br />
                    Instrument use can also be safely practiced and mesh insertion and placement along with pocket closure. The use of the tacker is also similar in both with the requirement of external pressure applied externally to assist in the tack in embedding correctly.
                  </p>
                  <div style={{ width: 800, height: 270, margin: '0 auto', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                    <iframe
                      src="https://player.vimeo.com/video/731802166?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{ width: '100%', height: '100%', display: 'block', border: 'none' }}
                      title="Comparing models"
                      allowFullScreen
                    />
                  </div>
                </section>
              </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div style={{ marginTop: 48 }}>
            <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: 16 }}>Masters Thesis</h2>
            <iframe
              src="https://indd.adobe.com/view/323537bf-3125-47de-953a-e3f0b73752d1?hide_share=true&hide_download=true&hide_report=true"
              style={{ width: "100%", minHeight: 600, border: "none", borderRadius: 12 }}
              allowFullScreen
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
