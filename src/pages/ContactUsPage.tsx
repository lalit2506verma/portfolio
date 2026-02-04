import ContactSection from "../components/contact/ContactSection"
import Navbar from "../components/navbar/Navbar"

const ContactUsPage = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar activeTab="Contact" />
        
        <div className="grow flex flex-col items-center justify-center pb-20 pt-8 mt-26">
          <ContactSection />
        </div>
      </div>
    </>
  )
}

export default ContactUsPage