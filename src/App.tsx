import type React from "react";
import Navbar from "./components/navbar/Navbar";
import BackgroundGrids from "./components/BackgroundGrids";

const App: React.FC = () => {
  return (
    <>
      <div className="dark:bg-background-dark dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
        <BackgroundGrids />
        {/* Main Layout */}
        <div className="relative z-10 flex flex-col grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
