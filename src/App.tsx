import type React from "react";
import BackgroundGrids from "./components/BackgroundGrids";
import { Route, Routes } from "react-router-dom";
import ArchitecturePage from "./pages/ArchitecturePage";
import ProjectsPage from "./pages/ProjectsPage";
import LogsPage from "./pages/LogsPage";
import ContactUsPage from "./pages/ContactUsPage";
import FooterSection from "./components/footer/FooterSection";

const App: React.FC = () => {
  return (
    <>
      <div className="dark:bg-background-dark dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
        {/* Background Grid */}
        <BackgroundGrids />
        
        {/* Routed Section */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<ArchitecturePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/contact-me" element={<ContactUsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <FooterSection/>
      </div>
    </>
  );
};

export default App;
