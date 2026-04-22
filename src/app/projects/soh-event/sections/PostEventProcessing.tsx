const PostEventProcessing = () => (
  <section>
    {/* Heading moved to text column */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <h2 className="font-bold">Post‑Event Processing, Certification & Financial Outputs</h2>
        <p>
          Following the live event, the structured data collected via the website is used to issue CPD certificates to attendees, generate certificates of presentation for oral and poster presenters, produce invoices and receipts for registrations and sponsorships, and support post‑event reporting and archival for the University of Limerick. This end to end data lifecycle ensures continuity from submission through to certification, demonstrating how the website underpins both academic recognition and administrative accountability.
        </p>
      </div>
      <div style={{ flex: 1, minWidth: 240, maxWidth: 700, flexBasis: '70%' }}>
        <video
          src="/images/projects/soh-event/IMG_2429.MOV"
          alt="Post Event Processing Video"
          style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  </section>
);

export default PostEventProcessing;
