const InformationArchitecture = () => (
  <section>
    {/* Heading moved to text column */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Information Architecture & Content Strategy</h2>
        <p>
          The symposium programme spans multiple surgical and perioperative specialties across parallel session tracks, including oral presentations, digital posters, video sessions, masterclasses, and named lectures. I designed a robust information architecture organising content by date, specialty, and presentation format. Consistent layouts and naming conventions reduce cognitive load for users and simplify administrative updates. The structure supports both live delivery and long‑term access, allowing previous symposium years to remain available while new content is introduced.
        </p>
      </div>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 700, flexBasis: '70%' }}>
        <img
          src="/images/projects/soh-event/SOH26_Timetable.png"
          alt="SOH 2026 Timetable"
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
        />
      </div>
    </div>
  </section>
);

export default InformationArchitecture;
