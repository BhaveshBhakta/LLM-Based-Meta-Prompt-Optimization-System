/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Optimizer from './components/Optimizer';

function LandingPage() {
  return (
    <>
      <Hero />
      <Transformation />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/optimize" element={<Optimizer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
