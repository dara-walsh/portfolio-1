"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSpotify } from '@/hooks/useSpotify';
import { useGitHub } from '@/hooks/useGithub';
import Layout from '@/components/layout';
import AnimatedSection from '@/components/about/AnimatedSection';
import TextReveal from '@/components/about/TextReveal';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import SpotifyPlaylists from '@/app/about/spotifyPlaylists';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import RoundedButton from '@/components/animations/roundedButton';
import OpenSourceShowcase from '@/components/about/OpenSourceShowcase';
import CompactGitHubWidget from '@/components/about/Widgets/CompactGitHubWidget';
// import IMessageWidget from '@/components/about/Widgets/IMessageWidget';

export default function About() {
  const {
    playlists,
    isLoading: spotifyLoading,
    error: spotifyError
  } = useSpotify();

  const {
    githubData,
    isLoading: githubLoading,
    error: githubError
  } = useGitHub();

  return (
    <div className="relative overflow-hidden">
      <Layout title="About Me">
        <div>
          <section className="grid gap-8 py-12 md:gap-12 lg:grid-cols-5 lg:gap-16">
            <AnimatedSection
              animation="fade-right"
              className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start"
            >
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
                <Image
                  src="/images/Head%20Shot_toon.png"
                  alt="Bettina"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </AnimatedSection>

            <div className="space-y-8 lg:col-span-3">
              <AnimatedSection animation="fade-up">
                <TextReveal
                  text="I began my career as an Architectural Technician, developing a strong foundation in spatial thinking, technical drawing, and human‑centred design. I later worked as a Production Manager in high‑volume technology manufacturing, gaining experience in complex systems, process optimisation, and cross‑functional collaboration. These experiences inform my current work in biomedical communication, where I apply structured thinking, technical rigour, and design methodology to healthcare and clinical contexts."
                  className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl"
                  as="p"
                  highlightWords={['design', 'technical', 'healthcare', 'clinical']}
                  scrub={false}
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Guiding Approach
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    Driven by continuous, self‑directed learning, I adapt my skills and methods to meet practical needs across research, clinical, and interdisciplinary settings.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Transition into Healthcare and Research
                  </h3>
                  <p className="leading-relaxed text-foreground/70">
                    Based in Limerick for most of my life, I entered healthcare later in my career, bringing skills and perspectives developed in other disciplines. This transition fostered a strong interest in anatomy, advanced surgical techniques, and learning processes. I am particularly motivated by facilitation—supporting others in navigating complex systems and achieving their learning and professional goals.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
          {/* Journey Section - split layout with widgets, inside card */}
          <section className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Where I&apos;ve Been
                </h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {/* Career/Roles Section - replaces timeline */}
                <div className="min-w-0 lg:col-span-1">
                  <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
                      Current Position
                    </h2>
                    <div className="mb-6 text-foreground/70">
                      <div className="mb-4">
                        <div className="font-semibold text-foreground">Research Assistant & Biomedical Communicator</div>
                        <div>Department of Surgery, University Hospital Limerick / University of Limerick</div>
                        <div>2012 – Present</div>
                        <div className="mt-2">
                          I work within the Department of Surgery supporting surgical education, anatomical research, and clinical communication. My responsibilities include intraoperative audiovisual capture, surgical video editing for undergraduate and postgraduate training, digital anatomical modelling, and technical support for research and simulation environments.<br />
                          I collaborate closely with surgeons, clinicians, nurses, and allied health professionals across the full perioperative pathway and support medical students, MSc, and PhD candidates with research‑related outputs. I am also a contributing author to Gray’s Anatomy (42nd and 43rd editions).
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="font-semibold text-foreground">Robotic Surgery Programme</div>
                        <div>Planning, Training & Clinical AV Lead</div>
                        <div>University Hospital Limerick</div>
                        <div>2016 – Present</div>
                        <div className="mt-2">
                          I was part of the core planning team for the regional Robotic Surgery Programme, contributing to costing, funding applications, and programme implementation. Following successful acquisition of €2.6M in funding, I supported system integration, regulatory compliance, audiovisual infrastructure, and digital content development.<br />
                          A central aspect of my role is hands‑on simulation and simulator‑based training. To date, I have delivered structured robotic surgery training to approximately 200 healthcare professionals across surgical, anaesthetic, nursing, and allied health disciplines.
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="font-semibold text-foreground">Previous Roles</div>
                        <div className="mt-2">
                          <div className="font-semibold">Production Manager</div>
                          <div>High‑Volume Technology Manufacturing</div>
                          <div>Asdium Ltd. / Acetech Ltd., Limerick</div>
                          <div>1994 – 2009</div>
                          <div className="mt-2">
                            Managed production, facilities, training, and health & safety within high‑volume technology manufacturing environments. This role developed strong skills in systems thinking, process optimisation, team coordination, and operational reliability.
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="font-semibold">Architectural Technician / Staff Architect</div>
                          <div>Design & Construction</div>
                          <div>Stephen Finn Contractors, Limerick</div>
                          <div>2006 – 2016</div>
                          <div className="mt-2">
                            Worked on residential and commercial projects spanning planning applications, master planning, technical detailing, and regulatory documentation. This period established a strong foundation in design methodology, technical communication, and human‑centred problem‑solving.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Education Section */}
                  <section className="py-16">
                    <AnimatedSection animation="fade-up">
                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
                          Education
                        </h2>
                        <div className="mb-6 text-foreground/70">
                          <div className="mb-4">
                            <div className="font-semibold text-foreground">Master of Science (MSc), First Class Honours</div>
                            <div>Design for Health and Wellbeing (Part‑Time)</div>
                            <div>University of Limerick, School of Design</div>
                            <div>2020 – 2022</div>
                            <div className="mt-2">
                              A research‑led programme focused on the integration of design, healthcare, and human factors. Core areas included design research methods, anatomy and physiology, health systems, human factors in healthcare, health promotion, and concept development and evaluation. The degree provided a strong interdisciplinary foundation for work in biomedical communication, surgical education, and healthcare research.
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">Bachelor of Science (BSc)</div>
                            <div>Architectural Technology</div>
                            <div>Dublin Institute of Technology (Bolton Street)</div>
                            <div>1989 – 1992</div>
                            <div className="mt-2">
                              Undergraduate training in technical design, spatial thinking, and applied problem‑solving, forming an early foundation for interdisciplinary and systems‑based practice.
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                    {/* Awards, Recognition & Scholarly Contributions Section */}
                    <AnimatedSection animation="fade-up" delay={0.1}>
                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8 mt-8">
                        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
                          Awards, Recognition & Scholarly Contributions
                        </h2>
                        <div className="mb-6 text-foreground/70 space-y-4">
                          <div>
                            <span className="font-semibold text-foreground">Contributing Author, Gray’s Anatomy, 42nd and 43rd Editions</span><br />
                            Contribution to the world’s leading anatomical reference, supporting the development and communication of contemporary anatomical knowledge.
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">First Class Honours, Master of Science in Design for Health and Wellbeing, University of Limerick (2022)</span>
                          </div>
                          <div>
                            Key contributor to the planning and implementation of the Robotic Surgery Programme at University Hospital Limerick, including involvement in a successful €2.6M multidisciplinary funding award.
                          </div>
                          <div>
                            Recognised for contributions to novel anatomical research and surgical education, including the development of the first human mesenteric training model and ongoing embryological mesentery mapping research.
                          </div>
                          <div>
                            Sustained recognition as a trusted interdisciplinary collaborator across surgical, medical, and perioperative teams, supporting education, simulation, and research dissemination.
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </section>
                </div>

                {/* Research Papers sidebar - replaces widgets */}
                <div className="min-w-0 lg:col-span-1">
                  <div className="space-y-4 lg:sticky lg:top-32">
                    <h2 className="mb-6 text-xl font-bold text-foreground sm:text-2xl">Selected Research</h2>
                    <AnimatedSection animation="fade-up">
                      {/* Paper 1 */}
                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm flex flex-row items-start gap-6 mb-8">
                        <div className="min-w-[280px] max-w-[360px] w-full flex items-center justify-center">
                          <img src="/images/research/Research1.png" alt="The Lancet Logo" className="object-contain h-auto w-full rounded-lg" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg font-bold text-foreground mb-2">Mesenteric sparing or extended resection in primary ileocolic resection for Crohn’s disease</h3>
                          <div className="text-foreground/70 mb-1">The Lancet Gastroenterology & Hepatology</div>
                          <div className="text-foreground/70 mb-1">Publication date: January 2025 (Volume 10, Issue 1, p.15)</div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Authors:</span> J. Calvin Coffey, Yi Li, Dara Walsh, Tara M. Connelly
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Affiliations:</span> Department of Surgery, University Hospital Group Limerick; School of Medicine, University of Limerick; Jinling Hospital, Nanjing University
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Publisher:</span> Elsevier
                          </div>
                          <a href="https://doi.org/10.1016/S2468-1253(24)00345-5" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition">Read Paper (DOI)</a>
                        </div>
                      </div>

                      {/* Paper 2 */}
                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm flex flex-row items-start gap-6">
                        <div className="min-w-[280px] max-w-[360px] w-full flex items-center justify-center">
                          {/* Add a relevant image for this paper if available */}
                          <img src="/images/research/Research2.jpg" alt="Springer Nature Logo" className="object-contain h-auto w-full rounded-lg" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg font-bold text-foreground mb-2">Future Directions in Investigating “The Mesentery in Inflammation”</h3>
                          <div className="text-foreground/70 mb-1">In: The Mesentery and Inflammation</div>
                          <div className="text-foreground/70 mb-1">Progress in Inflammation Research (Volume 90)</div>
                          <div className="text-foreground/70 mb-1">Publication date: January 2023 (First online: 5 January 2023)</div>
                          <div className="text-foreground/70 mb-1">Pages: 213–226</div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Authors:</span> Dara Walsh, Kevin G. Byrnes, J. Calvin Coffey
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Publisher:</span> Springer Nature
                          </div>
                          <a href="https://doi.org/10.1007/978-3-031-17774-3_12" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition">Read Chapter (DOI)</a>
                        </div>
                      </div>

                      {/* Paper 3 */}
                      <div className="mt-8 rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm flex flex-row items-start gap-6">
                        <div className="min-w-[280px] max-w-[360px] w-full flex items-center justify-center">
                          <img src="/images/research/Research3.jpg" alt="Clinical Anatomy paper" className="object-contain h-auto w-full rounded-lg" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg font-bold text-foreground mb-2">Radiologic, Histologic and Scanning Electron Microscopic Characterization of the Peritoneal Reflection in Crohn’s Disease</h3>
                          <div className="text-foreground/70 mb-1">Clinical Anatomy</div>
                          <div className="text-foreground/70 mb-1">Publication date: 22 February 2026</div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Authors:</span> L. Walsh, D. Walsh, C. P. Dunne, P. Dockery, J. C. Coffey
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Author contributions:</span> Walsh, L., Walsh, D., and Coffey, J. C. contributed equally to this work.
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Publisher:</span> Wiley
                          </div>
                          <a href="https://doi.org/10.1002/ca.70096" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition">Read Article (DOI)</a>
                        </div>
                      </div>

                      {/* Paper 4 */}
                      <div className="mt-8 rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm flex flex-row items-start gap-6">
                        <div className="min-w-[280px] max-w-[360px] w-full flex items-center justify-center">
                          <img src="/images/research/Setup%202.jpeg" alt="Techniques in Coloproctology paper" className="object-contain h-auto w-full rounded-lg" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg font-bold text-foreground mb-2">Initial experience with a dual-console robotic-assisted platform for training in colorectal surgery</h3>
                          <div className="text-foreground/70 mb-1">Techniques in Coloproctology</div>
                          <div className="text-foreground/70 mb-1">Publication date: 2017</div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Authors:</span> J. C. Bolger, M. P. Broe, M. A. Zarog, A. Looney, K. McKevitt, D. Walsh, S. Giri, C. Peirce, J. C. Coffey
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">Publisher:</span> Springer
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">ISSN:</span> 1128-045X (Print), 1123-6337 (Online)
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">DOI:</span> 10.1007/s10151-017-1687-8
                          </div>
                          <div className="text-foreground/70 mb-1">
                            <span className="font-semibold">EID (Scopus):</span> 2-s2.0-85029594487
                          </div>
                          <a href="https://doi.org/10.1007/s10151-017-1687-8" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition">Read Article (DOI)</a>
                        </div>
                      </div>

                      {/* ORCID Profile */}
                      <div className="mt-8 rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm">
                        <div className="mb-3 flex items-center gap-3">
                          <img
                            src="https://orcid.org/assets/vectors/orcid.logo.svg"
                            alt="ORCID logo"
                            className="h-8 w-auto"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">ORCID Profile</h3>
                        <div className="text-foreground/70 mb-3">
                          View my full publication and contributor record on ORCID.
                        </div>
                        <a
                          href="https://orcid.org/0000-0002-4962-9809"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                        >
                          Open ORCID
                        </a>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </Layout>

      <ContrastCursor isActive={false} text="" />
    </div>
  );
}
