import ExperienceTimeline from "../components/architecture/ExperienceTimeline"
import HeroSection from "../components/architecture/HeroSection"
import Navbar from "../components/navbar/Navbar"

const ArchitecturePage = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <Navbar activeTab="Architecture" />
        
        {/* HeroSection */}
        <HeroSection />
        
        {/* Experience TimeLine and Skills Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
          <ExperienceTimeline />
        </div>

      </div>
    </>
  )
}

export default ArchitecturePage