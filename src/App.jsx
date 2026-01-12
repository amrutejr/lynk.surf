import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ToneOptions from './components/ToneOptions';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import InstallGuideModal from './components/InstallGuideModal';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);


  // Handle hash scrolling
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const handleInstallClick = () => {
    // Trigger download
    window.open('https://dl.dropboxusercontent.com/scl/fi/2zfxumruk1msqi2yzjh48/lynksurf.zip?rlkey=ylx8fi2lht6130ywz9pgmrbw7&st=pck604ls&dl=0', '_self');

    // Open modal
    setIsInstallModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 relative">

        <Navbar onInstallClick={handleInstallClick} />
        <div className="relative z-10">
          <main>
            <div className="relative">

              <Hero onInstallClick={handleInstallClick} />
            </div>
            <Features />
            <ToneOptions />
            <HowItWorks />
            <Demo />
            <Pricing />
            <CTA />
          </main>
          <Footer />
        </div>
        <InstallGuideModal
          isOpen={isInstallModalOpen}
          onClose={() => setIsInstallModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
