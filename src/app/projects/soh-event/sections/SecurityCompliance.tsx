const SecurityCompliance = () => (
  <section>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Security, Compliance & Governance</h2>
        <p>
          Security and compliance are core to the system design. WordPress is configured using best practice security measures, including controlled user permissions and restricted administrative access. Sensitive data handling is intentionally segregated from the public site, relying on secure Google Workspace tools where appropriate. GDPR compliant privacy notices, photography and filming policies, and conflict of interest disclosures are built into the platform, ensuring alignment with university governance and healthcare regulatory standards.
        </p>
      </div>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 700, flexBasis: '70%', display: 'flex', flexDirection: 'row', gap: 24 }}>
        <img
          src="/images/projects/soh-event/Swedx.png"
          alt="Swedx Display"
          style={{ width: '50%', height: 'auto', borderRadius: 8 }}
        />
        <img
          src="/images/projects/soh-event/SOH2026 Template Powerpoint.png"
          alt="SOH2026 PowerPoint Template"
          style={{ width: '50%', height: 'auto', borderRadius: 8 }}
        />
      </div>
    </div>
  </section>
);

export default SecurityCompliance;
