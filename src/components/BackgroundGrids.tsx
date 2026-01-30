
const BackgroundGrids: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
        }}
      ></div>

      {/* Gradient Glow – Top Left */}
      <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px]" />

      {/* Gradient Glow – Bottom Right */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[30vw] h-[30vw] rounded-full bg-white/5 blur-[100px]" />
    </div>
  );
}

export default BackgroundGrids