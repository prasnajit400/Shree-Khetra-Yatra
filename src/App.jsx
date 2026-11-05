import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InquiryModal from './components/InquiryModal';
import HomePage from './pages/HomePage';
import SightseeingPage from './pages/SightseeingPage';
import OdishaTourismPage from './pages/OdishaTourismPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper component on route change (Guaranteed for mobile & desktop)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser automatic scroll restoration so it never retains previous page offset
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force instant scroll without animation so CSS smooth scroll does not get interrupted
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const root = document.getElementById('root');
    if (root) root.scrollTop = 0;

    // Follow-up after layout paint to guarantee top position across all mobile viewports
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (root) root.scrollTop = 0;
      document.documentElement.style.scrollBehavior = '';
    }, 40);

    return () => clearTimeout(timer);
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
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden w-full max-w-full">
      <ScrollToTop />
      
      {/* Sticky Header Navbar with 6 Tabs */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Multi-page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/sightseeing" element={<SightseeingPage onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/odisha-tourism" element={<OdishaTourismPage onOpenInquiry={handleOpenInquiry} />} />
          {/* Legacy redirect */}
          <Route path="/pilgrimage" element={<Navigate to="/odisha-tourism" replace />} />
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

      {/* Booking / Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        preselectedPackage={selectedPackage}
      />
    </div>
  );
}
