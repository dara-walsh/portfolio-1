import AnimatedSection from '@/components/about/AnimatedSection';

export default function RoboticSurgeryPage() {
  return (
    <div className="prose mx-auto p-8 pt-32 md:pt-36">
      {/* Hero Video - Styled like other projects */}
      <div className="mb-12 flex justify-center">
        <div style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/205412139?h=8dcc8fa69e&autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0&playsinline=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Robotic Surgery Hero Video"
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
              Robotic Surgery Research & Education
            </h1>
          </div>
        </div>
      </div>
      <h2>Technical Support, Education & Digital Systems Role</h2>

      <AnimatedSection>
        <section id="role-overview">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-bold">Role Overview & Clinical Context</h3>
              <p>
                My role within Robotic Surgery Research & Education is focused on providing specialist technical support, educational facilitation, and digital process management for robotic assisted surgery. This work supports consultants, surgical trainees, medical students, and wider healthcare professionals, ensuring that robotic systems are used safely, effectively, and in a manner aligned with both clinical and educational objectives.<br/>
                I am actively involved before, during, and after surgical procedures, contributing both technical expertise in the operating theatre and structured educational support outside the clinical environment.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
              <img
                src="/images/projects/robotic-surgery/IMG_1210.JPG"
                alt="Robotic Surgery Context"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="perioperative-support">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
              <img
                src="/images/projects/robotic-surgery/IMG_8830.JPG"
                alt="Robotic Surgery Perioperative Support"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </div>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-bold">Perioperative Technical Support (Pre, Intra & Post Surgery)</h3>
              <p>
                A key responsibility of my role is hands on troubleshooting and technical support across the full surgical timeline. Pre operatively, this includes system checks, configuration validation, and ensuring robotic platforms, peripherals, and recording systems are correctly prepared for the planned procedure.<br/>
                During surgery, I provide real time technical support, addressing system alerts, resolving process interruptions, and supporting the surgical team to ensure minimal disruption to patient care. This requires a calm, methodical approach and a clear understanding of both the technology and the clinical process.<br/>
                Post operatively, I assist with system shutdown, data handling, and review of recorded materials, ensuring that technical outputs are captured accurately and stored securely for educational or governance purposes.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="gdpr-recording">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-bold">Surgical Recording & GDPR Compliant Data Handling</h3>
              <p>
                I am responsible for the recording of robotic surgical procedures, ensuring high quality capture suitable for education, training, and review. This includes managing multiple video sources, synchronisation, and ensuring recordings meet both technical and ethical standards.<br/>
                A critical element of this work is GDPR compliance. I ensure that all recordings are handled according to data protection requirements, with controlled access, anonymisation where appropriate, and clear distinction between materials intended for clinical review, education, or public facing use. Data governance is embedded into the overall process rather than treated as a post hoc consideration.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
              <iframe
                src="https://player.vimeo.com/video/183479698?h=99bd0768ee&autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0&playsinline=1"
                width="100%"
                height="240"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Surgical Recording GDPR Video"
                style={{ width: '100%', height: '240px', borderRadius: 8, display: 'block' }}
                playsInline
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="video-editing">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
              <img
                src="/images/projects/robotic-surgery/Setup 2.jpeg"
                alt="Robotic Surgery Video Editing Setup"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </div>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-bold">Video Editing & Tiered Educational Output</h3>
              <p>
                Following recording, I perform video editing and content adaptation to ensure surgical footage is suitable for different audiences. This includes tailoring material for:
              </p>
              <ul className="list-disc pl-6">
                <li>Consultant level professional review</li>
                <li>Surgical trainees</li>
                <li>Medical students</li>
                <li>Other healthcare professionals</li>
                <li>Patient facing or public education, where appropriate</li>
              </ul>
              <p>
                Editing decisions account for educational value, level of anatomical detail, cognitive load, and sensitivity. The same procedure may therefore generate multiple outputs, each designed for a specific educational context. This approach maximises educational impact while maintaining clinical professionalism and ethical standards.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="education-training">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-bold">Robotic Surgery Education & Training Delivery</h3>
              <p>
                I play an active role in introductory and ongoing robotic surgery education, supporting students, trainees, and other healthcare professionals from both internal and external institutions. Training typically takes place in theatre, using the built in robotic simulator or dry box systems, often at the patient console.<br/>
                This includes explaining robotic concepts, system mechanics, safety principles, and basic technical skills. Sessions are adapted to the learner’s level, whether introductory exposure for medical students or skills refinement for trainees and allied professionals.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
              <iframe
                src="https://player.vimeo.com/video/235903388?h=b48808a335&autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0&playsinline=1"
                width="100%"
                height="240"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Robotic Surgery Education Video"
                style={{ width: '100%', height: '240px', borderRadius: 8, display: 'block' }}
                playsInline
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="simulator-admin">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
              <video
                src="/images/projects/robotic-surgery/SIMxi_BA_1.mp4"
                width={400}
                height={240}
                style={{ width: '100%', height: '240px', borderRadius: 8, display: 'block' }}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
              <h3 className="font-bold">Simulator Administration & User Management</h3>
              <p>
                As part of the educational process, I administer access to robotic simulators, including the creation and management of new user accounts. I provide guidance on simulator setup, usage, and progression, ensuring that users can engage with the technology effectively and independently.<br/>
                This administrative oversight supports structured skills development, standardised access, and appropriate tracking of simulator use, contributing to both education quality and governance.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section id="ras-programme">
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
            <h3 className="font-bold">RAS Programme Participation & Stakeholder Engagement</h3>
            <p>
              I am an active member of the Robotic Assisted Surgery (RAS) Programme, a multidisciplinary forum where clinical, technical, academic, and operational stakeholders come together. The programme provides a structured environment for sharing achievements, identifying concerns, and shaping the future direction of robotic surgery services.<br/>
              My participation ensures that technical, educational, and digital considerations are represented alongside clinical priorities, supporting balanced and sustainable programme development.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
            <img
              src="/images/projects/robotic-surgery/Team%20Robot%201_1.JPG"
              alt="RAS Programme Participation & Stakeholder Engagement Team"
              width={400}
              height={240}
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 8, display: 'block' }}
            />
          </div>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      <section id="professional-value">
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
            <img
              src="/images/projects/robotic-surgery/ul-hospital-group-award-1.jpeg"
              alt="UL Hospital Group Award"
              width={400}
              height={240}
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 8, display: 'block' }}
            />
          </div>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
            <h3 className="font-bold">Professional Value & Impact</h3>
            <p>
              This role sits at the intersection of technology, surgery, education, and governance. It demonstrates my ability to operate effectively in high stakes clinical environments while delivering structured educational outputs and maintaining strict data protection standards.<br/>
              My work in Robotic Surgery Research & Education highlights strengths in perioperative technical support, educational technology, video production, compliance aware data handling, and multidisciplinary collaboration, contributing directly to safe surgical practice and high quality training.
            </p>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}