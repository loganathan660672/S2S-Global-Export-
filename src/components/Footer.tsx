import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenRFQ }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Wordmark & Provenance */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-emerald-900/30 bg-white shrink-0">
                <img
                  src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
                  alt="S2S Global Exim Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white font-display">
                  S2S Global Exim
                </span>
                <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
                  Merchandise Exporter
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Exclusively a Merchandise Exporter connecting verified agro manufacturers &amp; farm cooperatives in Tamil Nadu directly to global buyers and end users.
            </p>
            <div className="space-y-1 text-stone-300 text-[11px]">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, India</span>
              </div>
              <div className="pt-1">
                WhatsApp / Tel: <a href="https://wa.me/919894660672" className="text-amber-300 font-mono-numbers hover:underline font-semibold">+91 9894660672</a>
              </div>
              <div>
                Email: <a href="mailto:sales@s2sglobalexim.com" className="text-emerald-400 font-mono-numbers hover:underline font-semibold">sales@s2sglobalexim.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Flagship Products */}
          <div className="space-y-2">
            <div className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              Flagship Powders
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setActiveTab('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Organic Moringa Powder (80–120 Mesh)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  High-Curcumin Turmeric Powder (Salem/Erode)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dehydrated White & Red Onion Powder
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pure Dehydrated Garlic Powder (Allicin-Rich)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Export Navigation */}
          <div className="space-y-2">
            <div className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              Trade Portals
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => setActiveTab('supply-chain')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Interactive Supply Chain Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('b2b-portal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  B2B Order Portal & Container Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('certifications')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Export Certifications & Lab Dossiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Cuddalore Agro Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Export FAQ &amp; Incoterms
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Direct Export Desk &amp; WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trade Compliance Notice */}
          <div className="space-y-3">
            <div className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              Statutory Export Accreditations
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Export Registration with APEDA, Spices Board India, FSSAI Central Export License, USDA Organic / NPOP Equivalent, and US-FDA Registered Foreign Food Facility.
            </p>
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Launch B2B Order Portal</span>
            </button>
          </div>
        </div>

        {/* Quiet Bottom Copyright Line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} S2S Global Exim. Cuddalore, Tamil Nadu, India. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Direct Ocean Bill of Lading (Chennai & Tuticorin Seaports)</span>
            <span aria-hidden="true">·</span>
            <span>Incoterms 2020 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
