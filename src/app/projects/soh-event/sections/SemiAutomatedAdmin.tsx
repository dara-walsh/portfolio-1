const SemiAutomatedAdmin = () => (
  <section>
    {/* Heading moved to text column */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 700, flexBasis: '70%' }}>
        <img
          src="/images/projects/soh-event/IMG_2341.JPG"
          alt="SOH Event Administration"
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
        />
      </div>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Semi‑Automated Event Administration & Workflow Design</h2>
        <p>
          The website facilitates online abstract submission, online registration (including student-specific pathways), submission of oral presentation files and digital posters, and structured collection of disclosures and supporting documentation. Submission and registration data is routed into Google Sheets, where it is reviewed, filtered, assigned, and processed by the organising committee. This data directly informs programme scheduling, reviewer allocation, judging workflows, room planning, and session logistics. Because I am deeply involved in the operational delivery of the event, these workflows were designed around real administrative needs, significantly reducing manual handling and allowing the organising team to focus on academic quality and event delivery.
        </p>
      </div>
    </div>
  </section>
);

export default SemiAutomatedAdmin;
