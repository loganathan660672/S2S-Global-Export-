import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Award } from 'lucide-react';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onExploreMap: () => void;
  onOpenRFQ: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onExploreMap,
  onOpenRFQ,
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background visual with rich dark scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_spices_export_1794474793894.jpg"
          alt="S2S Global Exim agro export powders in ceramic vessels"
          className="w-full h-full object-cover opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Origin & Category Kicker with Emblem */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-8 h-8 rounded-md overflow-hidden border border-emerald-500/30 bg-white shrink-0 shadow-xs">
                <img
                  src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
                  alt="S2S Global Exim Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Cuddalore, Tamil Nadu, India
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-300">Merchandise Exporter</span>
              </div>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Specialized Merchandise Exporter for Pure Botanical Powders
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              S2S Global Exim operates exclusively as a Merchandise Exporter, supplying 100% pure organic Moringa, high-curcumin Turmeric, and dehydrated Onion &amp; Garlic powders directly from accredited manufacturers and farmer cooperatives in Tamil Nadu to international buyers and end users.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-md"
              >
                <span>Launch B2B RFQ Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919894660672"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 border border-emerald-600 rounded-lg transition-colors cursor-pointer"
              >
                <span>WhatsApp: +91 9894660672</span>
              </a>

              <button
                onClick={onExploreMap}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors cursor-pointer"
              >
                <span>Traceability Map</span>
              </button>
            </div>

            {/* Proof Trust Points */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Merchandise Exporter</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>APEDA & FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NABL & Eurofins COA</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Chennai & Tuticorin Seaports</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Commercial Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Merchandise Export Operations
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Corporate Office &amp; Logistics Hub
                  </h3>
                  <div className="text-[11px] text-stone-400 mt-1">
                    113 Kamaraj Nagar, Vanniar Palayam, Cuddalore
                  </div>
                </div>
                <span className="text-xs font-mono-numbers px-2.5 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 rounded shrink-0">
                  FCL & LCL Ready
                </span>
              </div>

              {/* 4 Flagship Products Quick Snapshot */}
              <div className="space-y-3">
                <div className="p-3 bg-stone-950/60 border border-stone-800/80 rounded-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-white">Organic Moringa Powder</div>
                    <div className="text-xs text-stone-400">80–120 Mesh · Shade-Dried &lt;42°C · Chlorophyll Rich</div>
                  </div>
                  <span className="text-xs font-mono-numbers text-amber-300 font-medium">HS 07129090</span>
                </div>

                <div className="p-3 bg-stone-950/60 border border-stone-800/80 rounded-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-white">High-Curcumin Turmeric Powder</div>
                    <div className="text-xs text-stone-400">3.5% – 5.5% Curcumin · Salem & Erode Rhizomes</div>
                  </div>
                  <span className="text-xs font-mono-numbers text-amber-300 font-medium">HS 09103020</span>
                </div>

                <div className="p-3 bg-stone-950/60 border border-stone-800/80 rounded-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-white">Dehydrated Onion Powder</div>
                    <div className="text-xs text-stone-400">White & Pink Bulbs · High Pyruvic Pungency · No Caking</div>
                  </div>
                  <span className="text-xs font-mono-numbers text-amber-300 font-medium">HS 07122000</span>
                </div>

                <div className="p-3 bg-stone-950/60 border border-stone-800/80 rounded-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-white">Dehydrated Garlic Powder</div>
                    <div className="text-xs text-stone-400">Allicin-Potent (≥4.5mg/g) · Cryo-Milled Off-White</div>
                  </div>
                  <span className="text-xs font-mono-numbers text-amber-300 font-medium">HS 07129020</span>
                </div>
              </div>

              {/* Fast Quote Action inside card */}
              <div className="pt-2 flex items-center justify-between text-xs text-stone-400">
                <span>Direct Sea Port Transit: 4–24 Days</span>
                <span className="text-white font-medium">Incoterms: FOB / CIF / CFR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Bottom KPI Strip */}
      <div className="border-t border-stone-800 bg-stone-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-300">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-white">
                100%
              </div>
              <div className="text-xs text-stone-400 mt-1">Farm-gate Direct Procurement</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-white">
                42+
              </div>
              <div className="text-xs text-stone-400 mt-1">Global Ocean Port Destinations</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-white">
                &lt; 6.5%
              </div>
              <div className="text-xs text-stone-400 mt-1">Moisture Controlled for Extended Shelf Life</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-white">
                0 ppm
              </div>
              <div className="text-xs text-stone-400 mt-1">Lead Chromate / Sudan Dye Adulteration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
