import React from 'react';
import { MapPin, Factory, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AboutCuddaloreProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

export const AboutCuddalore: React.FC<AboutCuddaloreProps> = ({
  onOpenRFQ,
  onExploreProducts,
}) => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Corporate Provenance · S2S Global Exim
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            {t('about.title')}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Narrative & Strategic Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Strategic Advantages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    The Cuddalore Agrarian Geographic Advantage
                  </h3>
                  <div className="text-xs text-stone-500">
                    Coastal Alluvial Belt, Bay of Bengal Gateway
                  </div>
                </div>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Situated along the fertile coastal plains of Tamil Nadu, Cuddalore enjoys an optimal agro-climatic balance—intense sunshine hours, well-drained alluvial soil, and direct agrarian connectivity to the Western Ghats moringa belts (Dindigul) and the world-famous turmeric trading centers of Erode and Salem. This geographic positioning enables S2S Global Exim to aggregate raw produce within 4 hours of harvest.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <Factory className="w-4 h-4 text-emerald-800" />
                  <span>Integrated Clean Processing</span>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Our facility features controlled low-temperature solar dehydration tunnels (&lt;42°C) and cryogenic micro-pulverizers to preserve sensitive enzymes, allicin, and chlorophyll without scorching.
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <Users className="w-4 h-4 text-emerald-800" />
                  <span>Fair-Trade Cooperative Model</span>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  We contract directly with 350+ smallholder farmer families in Cuddalore and adjacent districts, ensuring guaranteed farm-gate pricing, zero middlemen cuts, and transparent soil management.
                </p>
              </div>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-800" />
                <span>Zero Brokerage &amp; Direct B2B Pricing</span>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                By operating strictly as a dedicated Merchandise Exporter with verified manufacturing partnerships, in-house quality inspection, nitrogen-flushed packaging, and direct container stuffing at our Cuddalore hub, we pass substantial cost savings directly to overseas importers, spice blenders, and retail brand owners.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenRFQ}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Start Direct Export RFQ
              </button>
              <button
                onClick={onExploreProducts}
                className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Browse Standard Specifications
              </button>
            </div>
          </div>

          {/* Right: Facility & Export Facts Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-900 text-white border border-stone-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1 border-b border-stone-800 pb-4">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Merchandise Export Operations
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  S2S Global Exim Profile
                </h4>
              </div>

              <div className="space-y-4 text-xs font-mono-numbers">
                <div className="flex justify-between items-start py-2 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans shrink-0">Corporate Office:</span>
                  <span className="text-white font-semibold text-right pl-4">
                    113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, India
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans">Business Structure:</span>
                  <span className="text-emerald-400 font-semibold">Exclusively Merchandise Exporter</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans">Direct WhatsApp:</span>
                  <span className="text-amber-300 font-semibold">+91 9894660672</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans">Distance to Chennai Port (CCTL):</span>
                  <span className="text-stone-200 font-semibold">180 km / Direct Container Drayage</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans">Distance to VOC Port Tuticorin:</span>
                  <span className="text-stone-200 font-semibold">390 km / Direct Ocean Mainline</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-stone-400 font-sans">Export Quality Testing:</span>
                  <span className="text-white font-semibold">NABL Accredited / Eurofins Partnered</span>
                </div>
              </div>

              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 text-[11px] text-stone-400">
                Operating strictly under APEDA, Spices Board India, and FSSAI export licensing for global food ingredients distribution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
