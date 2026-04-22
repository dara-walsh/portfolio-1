


const TechnicalStack = () => (
  <section>
    {/* Heading moved to text column */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, margin: '32px 0' }}>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 600, flexBasis: '70%' }}>
        <img
          src="/images/projects/soh-event/dd20e585-07dc-4190-a206-a4946ef88096.jpg"
          alt="SOH Room Slide Example"
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
        />
      </div>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Technical Stack & Platform Architecture</h2>
        <p>
          The platform is built on WordPress, configured as a structured content management system rather than a traditional blog. Custom page hierarchies, reusable templates, and modular content patterns were designed to support annual reuse, evolving programme requirements, and long‑term institutional archiving. To support administrative and academic workflows, the site integrates Google Drive and Google Sheets. This hybrid architecture allows structured data to be captured via the website and processed collaboratively using secure cloud-based tools, while keeping the public-facing system performant, stable, and secure.
        </p>
      </div>
    </div>
  </section>
);

export default TechnicalStack;
