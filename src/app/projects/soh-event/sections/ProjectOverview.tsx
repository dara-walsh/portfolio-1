


const ProjectOverview = () => (
  <section>
    {/* Heading moved to text column */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Project Overview & Institutional Context</h2>
        <p>
          SOH.ISRS.ie is the official website for the Sylvester O’Halloran Perioperative Symposium, a national, three‑day academic conference organised for the University of Limerick, the Department of Surgery, and the Professor of Surgery, in collaboration with the Irish Surgical Research Society. I led the end‑to‑end design, development, and technical delivery of the website and play an active role in the operational running of the symposium itself. The website was conceived not just as an information platform, but as a core operational system supporting the full lifecycle of the event, from abstract submission and registration through to post‑event certification and reporting.
        </p>
      </div>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 400, flexBasis: '70%' }}>
        <img
          src="/images/projects/soh-event/Cover Art 2026 Website.png"
          alt="Sylvester O’Halloran Perioperative Symposium Logo"
          width={400}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
    {/* Removed second image and paragraph as requested */}
  </section>
);

export default ProjectOverview;
