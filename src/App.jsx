import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InquiryModal from './components/InquiryModal';
import HomePage from './pages/HomePage';
import SightseeingPage from './pages/SightseeingPage';
import PilgrimageGuidePage from './pages/PilgrimageGuidePage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper component on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenInquiry = (packageName = '') => {
    setSelectedPackage(packageName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      <ScrollToTop />
      
      {/* Sticky Header Navbar with 6 Tabs */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Multi-page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/sightseeing" element={<SightseeingPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/pilgrimage" element={<PilgrimageGuidePage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/packages" element={<PackagesPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/gallery" element={<GalleryPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions onOpenInquiry={handleOpenInquiry} />

      {/* Global Interactive Lead & Booking Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialPackage={selectedPackage}
      />
    </div>
  );
}
