import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ToneOptions from './components/ToneOptions';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import InstallGuideModal from './components/InstallGuideModal';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  const handleInstallClick = () => {
    // Trigger download
    window.open('http://dl.dropboxusercontent.com/scl/fi/2zfxumruk1msqi2yzjh48/lynksurf.zip?rlkey=ylx8fi2lht6130ywz9pgmrbw7&st=pck604ls&dl=0', '_self');

    // Open modal
    setIsInstallModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 relative">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        <div className="relative z-10">
          <Navbar onInstallClick={handleInstallClick} />
          <main>
            <Hero onInstallClick={handleInstallClick} />
            <Features />
            <ToneOptions />
            <HowItWorks />
            <Demo />
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
