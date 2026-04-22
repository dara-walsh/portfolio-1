const Outcomes = () => (
  <section>
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Outcomes & Professional Value</h2>
        <p>
          SOH.ISRS.ie is a production grade operational system, not merely a marketing website. It supports the full lifecycle of a national academic conference, from submission and registration through live delivery, certification, financial processing, and archival. The project demonstrates my ability to design and deliver secure, workflow driven digital systems, integrate cloud platforms, manage complex datasets, and align technical solutions with real world academic and institutional needs, particularly within higher education and healthcare environments.
        </p>
      </div>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 700, flexBasis: '70%' }}>
        <img
          src="/images/projects/surgical-simulation/SOH Potrait.png"
          alt="SOH Portrait"
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
        />
      </div>
    </div>
  </section>
);

export default Outcomes;
