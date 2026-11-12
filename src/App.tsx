/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CurrencyCode, ProductSpec, RFQItem } from './types';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSlideshow } from './components/HeroSlideshow';
import { ProductsSection } from './components/ProductsSection';
import { SupplyChainMap } from './components/SupplyChainMap';
import { B2BOrderPortal } from './components/B2BOrderPortal';
import { QualityCertifications } from './components/QualityCertifications';
import { ClientTestimonials } from './components/ClientTestimonials';
import { AboutCuddalore } from './components/AboutCuddalore';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function MainApp() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [rfqInitialItems, setRfqInitialItems] = useState<RFQItem[]>([]);
  const { isRtl } = useLanguage();

  // Smooth scroll or tab routing handler
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Add specific product to RFQ
  const handleSelectProductForRFQ = (product: ProductSpec, isSampleOnly?: boolean) => {
    const newItem: RFQItem = {
      productId: product.id,
      productName: product.name,
      meshSize: product.meshOptions[0],
      packaging: product.packagingOptions[0],
      quantityMetricTons: isSampleOnly ? 0.002 : (product.moqCommercialKg / 1000),
      isSampleOnly,
    };

    setRfqInitialItems((prev) => {
      const filtered = prev.filter((it) => it.productId !== product.id);
      return [...filtered, newItem];
    });

    handleTabChange('b2b-portal');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-amber-200 selection:text-stone-900">
      {/* Strict 3-zone Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        currency={currency}
        setCurrency={setCurrency}
        onOpenRFQ={() => handleTabChange('b2b-portal')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Product Image Background Slideshow */}
        <HeroSlideshow
          onExploreProducts={() => handleTabChange('products')}
          onExploreMap={() => handleTabChange('supply-chain')}
          onOpenRFQ={() => handleTabChange('b2b-portal')}
        />

        {/* 1. Products & Technical Specifications */}
        <ProductsSection
          currency={currency}
          onSelectForRFQ={handleSelectProductForRFQ}
        />

        {/* 2. Interactive Supply Chain Transparency Map (Tamil Nadu & Global Ocean Lanes) */}
        <SupplyChainMap />

        {/* 3. Secure B2B Ordering & RFQ Portal with Container Calculator */}
        <B2BOrderPortal
          currency={currency}
          initialItems={rfqInitialItems}
        />

        {/* 4. Quality, Compliance & Lab Testing Matrix */}
        <QualityCertifications />

        {/* 5. Client Testimonials & Proven International Trade Records */}
        <ClientTestimonials onOpenRFQ={() => handleTabChange('b2b-portal')} />

        {/* 6. About Cuddalore Heritage & Direct Farmer Model */}
        <AboutCuddalore
          onOpenRFQ={() => handleTabChange('b2b-portal')}
          onExploreProducts={() => handleTabChange('products')}
        />

        {/* 7. Direct Contact & Live Synchronized Clocks */}
        <ContactSection />
      </main>

      {/* Anti-Slop Quiet Exporter Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenRFQ={() => handleTabChange('b2b-portal')}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
