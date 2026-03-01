export default function BackgroundPattern() {
  return (
    <>
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
      <div className="bg-dots pointer-events-none fixed inset-0 z-0" />
      <div className="bg-noise pointer-events-none fixed inset-0 z-0" />
    </>
  );
}
