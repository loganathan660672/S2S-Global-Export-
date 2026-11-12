import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { 
  Star, 
  ShieldCheck, 
  Anchor, 
  CheckCircle2, 
  Quote, 
  Building2, 
  FileText, 
  ArrowUpRight,
  Boxes,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export interface BuyerTestimonial {
  id: string;
  buyerName: string;
  role: string;
  company: string;
  country: string;
  flag: string;
  destinationPort: string;
  market: 'ALL' | 'EU' | 'US' | 'GCC';
  commodity: string;
  volume: string;
  containerType: string;
  rating: number;
  inspectionHighlights: string[];
  quote: string;
  keyResult: string;
  batchCode: string;
  deliveryYear: string;
}

const TESTIMONIALS: BuyerTestimonial[] = [
  {
    id: 'test-1',
    buyerName: 'Dr. Julian Weber',
    role: 'Head of Herbal Raw Material Sourcing',
    company: 'Bavaria Herbal Blends GmbH & Co. KG',
    country: 'Germany',
    flag: '🇩🇪',
    destinationPort: 'Port of Hamburg',
    market: 'EU',
    commodity: 'Certified Organic Moringa Leaf Powder & Rose Petals',
    volume: '24.0 Metric Tons',
    containerType: '40ft FCL High Cube',
    rating: 5,
    inspectionHighlights: ['Eurofins Heavy Metals Passed', 'Zero ETO Residue (<0.01 mg/kg)', 'Moisture at 6.4%'],
    quote: 'Importing botanical powders from India previously posed persistent pesticide residue headaches with EU customs. S2S Global Exim completely eliminated that risk. Their direct agro-manufacturer coordination in Cuddalore produced a vibrant emerald-green moringa powder with pristine Eurofins analytical dossiers. Zero customs detention at Hamburg Port across three consecutive 40ft containers.',
    keyResult: '100% EU statutory MRL compliance, zero border detention',
    batchCode: 'EXP-MOR-2025-DE04',
    deliveryYear: '2025–2026',
  },
  {
    id: 'test-2',
    buyerName: 'Elena Rostova-Clarke',
    role: 'VP of Quality & Strategic Procurement',
    company: 'Apex Botanicals & Nutraceuticals Corp',
    country: 'United States',
    flag: '🇺🇸',
    destinationPort: 'Port of Los Angeles (LAX/LGB)',
    market: 'US',
    commodity: 'High-Curcumin Turmeric (5.2%) & Cryogenic Garlic Powder',
    volume: '36.5 Metric Tons',
    containerType: '2x 20ft FCL + 1x 40ft FCL',
    rating: 5,
    inspectionHighlights: ['US-FDA Prior Notice Cleared', 'Curcumin Active: 5.34% HPLC', 'Lead (Pb) < 0.08 ppm'],
    quote: 'As a nutraceutical capsule brand, our active potency cannot fluctuate between lots. S2S Global Exim’s Alleppey-grade turmeric consistently tests above 5.2% curcumin via HPLC, and their cryogenic garlic powder avoids scorching while preserving natural allicin. Their export desk in Cuddalore provides complete transparency from harvest lot to maritime bill of lading.',
    keyResult: 'Guaranteed 5.2%+ bioactives with US-FDA compliant packaging',
    batchCode: 'EXP-TUR-2025-US09',
    deliveryYear: '2025',
  },
  {
    id: 'test-3',
    buyerName: 'Tariq Al-Mansoor',
    role: 'Commercial Sourcing Director',
    company: 'Al-Khaleej Food Flavors & Spices Group',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    destinationPort: 'Jebel Ali Port, Dubai',
    market: 'GCC',
    commodity: 'Toasted Onion Powder, Garlic Granules & Kasuri Methi',
    volume: '48.0 Metric Tons',
    containerType: '2x 40ft FCL',
    rating: 5,
    inspectionHighlights: ['Halal Certified Export', 'Zero Clumping / Anti-caking Free', '14-Day Chennai to Dubai Transit'],
    quote: 'In commercial food seasonings, onion and garlic powders often cake during humid sea transit. S2S Global Exim uses heavy-duty multiwall nitrogen-flushed foil liner bags that arrive at Jebel Ali factory-fresh and free-flowing. Their WhatsApp export communication is instantaneous, and shipment documents are dispatched within 24 hours of vessel departure.',
    keyResult: 'Zero transit caking, 14-day rapid turnaround via Chennai',
    batchCode: 'EXP-ALLIUM-2025-DXB11',
    deliveryYear: '2025–2026',
  },
  {
    id: 'test-4',
    buyerName: 'Marc Dubois',
    role: 'Master Tea Blender & Procurement Director',
    company: 'Herboristerie Botanique de Provence',
    country: 'France',
    flag: '🇫🇷',
    destinationPort: 'Port of Marseille-Fos',
    market: 'EU',
    commodity: 'Dehydrated Curry Leaves, Lemongrass & Dried Tulsi',
    volume: '12.0 Metric Tons',
    containerType: '20ft FCL Container',
    rating: 5,
    inspectionHighlights: ['Steam-Sterilized Natural Aroma', 'Microbiological Count < 5,000 CFU/g', 'Zero Artificial Dyes'],
    quote: 'Finding culinary herbs that retain their volatile essential oils after export is rare. The dried curry leaves and lemongrass supplied by S2S Global Exim maintain the exact green hue and botanical aroma required for our premium infusion tea blends. Their direct grower relationships in Tamil Nadu make a tangible quality difference.',
    keyResult: 'Exceptional aroma preservation for gourmet retail tea',
    batchCode: 'EXP-HERB-2025-FR02',
    deliveryYear: '2025',
  },
  {
    id: 'test-5',
    buyerName: 'Mateo Fernandez',
    role: 'Industrial Seasonings Purchasing Lead',
    company: 'Condimentos e Ingredientes del Sol S.L.',
    country: 'Spain',
    flag: '🇪🇸',
    destinationPort: 'Port of Valencia',
    market: 'EU',
    commodity: 'Stemless Red Chilli Powder (35,000 SHU) & Coriander Powder',
    volume: '28.0 Metric Tons',
    containerType: '40ft FCL High Cube',
    rating: 5,
    inspectionHighlights: ['HPLC Sudan Dyes: Negative', 'Aflatoxin B1/Total < 4 ppb', 'Uniform 80 Mesh Grind'],
    quote: 'The European Union maintains strict zero tolerance on Sudan dyes and aflatoxins in red chilli powder. Every container stuffed by S2S Global Exim in Cuddalore arrives with accredited lab testing proving 100% absence of adulterants. We have renewed our annual supply contract for 2026 with full confidence.',
    keyResult: 'Zero Sudan adulteration, accredited lab COA in every box',
    batchCode: 'EXP-CHIL-2025-ES07',
    deliveryYear: '2025–2026',
  },
  {
    id: 'test-6',
    buyerName: 'Arthur Pendelton',
    role: 'Supply Chain Operations Director',
    company: 'Albion Organic Extracts & Health Foods Ltd',
    country: 'United Kingdom',
    flag: '🇬🇧',
    destinationPort: 'Port of Felixstowe / London Gateway',
    market: 'EU',
    commodity: 'Organic Moringa Powder & Black Pepper Powder',
    volume: '18.5 Metric Tons',
    containerType: '20ft FCL',
    rating: 5,
    inspectionHighlights: ['UK Organic Standard Compliance', 'Piperine Content: 6.8%', 'Mesh: 100 Fine Pulverized'],
    quote: 'The team at S2S Global Exim handles international logistics with institutional precision. From prompt proforma generation on their B2B portal to handling phytosanitary documentation and drayage to Chennai port, the entire consignment arrived at Felixstowe ahead of schedule with immaculate batch traceability.',
    keyResult: 'Turnkey freight logistics, certified UK customs clearance',
    batchCode: 'EXP-PEP-2025-UK12',
    deliveryYear: '2025',
  },
];

interface ClientTestimonialsProps {
  onOpenRFQ?: () => void;
}

export const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ onOpenRFQ }) => {
  const { t } = useLanguage();
  const [activeMarket, setActiveMarket] = useState<'ALL' | 'EU' | 'US' | 'GCC'>('ALL');
  const [selectedProof, setSelectedProof] = useState<BuyerTestimonial | null>(null);

  const filteredTestimonials = activeMarket === 'ALL'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(item => item.market === activeMarket);

  return (
    <section id="testimonials" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100/80 text-emerald-900 border border-emerald-300/60 rounded text-[11px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
              <span>Verified Importer Testimonials · Proven Trade Records</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              Trusted by Food Manufacturers, Tea Packers &amp; Spice Blenders Worldwide
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Read direct feedback from international procurement directors across Europe, North America, and the Middle East who import container consignments directly from our Cuddalore agro processing facilities.
            </p>
          </div>

          {/* Market Region Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-stone-200 rounded-lg shadow-2xs self-start md:self-end shrink-0">
            {[
              { id: 'ALL', label: 'All Destinations' },
              { id: 'EU', label: '🇪🇺 Europe' },
              { id: 'US', label: '🇺🇸 North America' },
              { id: 'GCC', label: '🇦🇪 Middle East' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMarket(tab.id as any)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  activeMarket === tab.id
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Global Export Trust KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase text-stone-500 tracking-wider">Customs Pass Rate</span>
            <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-emerald-800 mt-1">100%</div>
            <span className="text-[11px] text-stone-500 mt-1">Zero EU / FDA border rejections</span>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase text-stone-500 tracking-wider">FCL &amp; LCL Tonnage</span>
            <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-stone-900 mt-1">1,850+ MT</div>
            <span className="text-[11px] text-stone-500 mt-1">Exported directly from Cuddalore hub</span>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase text-stone-500 tracking-wider">Accredited Testing</span>
            <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-emerald-800 mt-1">Eurofins / NABL</div>
            <span className="text-[11px] text-stone-500 mt-1">Certified COA with every container</span>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <span className="text-[11px] font-semibold uppercase text-stone-500 tracking-wider">Buyer Retention</span>
            <div className="text-2xl sm:text-3xl font-bold font-mono-numbers text-stone-900 mt-1">94.8%</div>
            <span className="text-[11px] text-stone-500 mt-1">Multi-year commercial repeat contracts</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded-xl p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
            >
              {/* Card Top: Buyer Header & Rating */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.flag}</span>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-tight">
                        {item.buyerName}
                      </h4>
                    </div>
                    <div className="text-xs text-stone-500 font-medium mt-0.5">
                      {item.role}
                    </div>
                    <div className="text-xs font-semibold text-emerald-800 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 text-emerald-700 shrink-0" />
                      <span className="truncate">{item.company}</span>
                    </div>
                  </div>

                  {/* 5-Star Rating Pill */}
                  <div className="flex items-center gap-0.5 p-1 bg-amber-50 border border-amber-200/60 rounded text-amber-500 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Consignment Specs Badge */}
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-stone-600 font-mono-numbers">
                    <span className="text-[11px] text-stone-500 font-sans">Discharge Port:</span>
                    <span className="font-semibold text-stone-900 flex items-center gap-1">
                      <Anchor className="w-3 h-3 text-emerald-800" />
                      {item.destinationPort}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600">
                    <span className="text-[11px] text-stone-500 font-sans">Consignment:</span>
                    <span className="font-semibold text-stone-800 text-right truncate max-w-[190px]">
                      {item.commodity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600 font-mono-numbers text-[11px]">
                    <span className="text-stone-500 font-sans">Volume / Unit:</span>
                    <span className="font-semibold text-emerald-900 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                      {item.volume} ({item.containerType})
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pt-1">
                  <Quote className="w-6 h-6 text-stone-300 absolute -top-1 -left-1 opacity-60" />
                  <p className="text-xs text-stone-700 leading-relaxed pl-4 italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Card Bottom: Inspection Highlights & Batch Stamp */}
              <div className="pt-4 border-t border-stone-100 space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">
                    Verified Quality Clearance:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.inspectionHighlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/60"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-700 shrink-0" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-[10px] text-stone-500 font-mono-numbers">
                    Lot: <span className="font-semibold text-stone-800">{item.batchCode}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProof(item)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                  >
                    <span>Inspect Lot Dossier</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct CTA banner */}
        <div className="bg-stone-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Direct Manufacturer-To-Buyer Merchandise Exporter
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Ready to Join Our Global Network of Importers?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
              Request a free 2kg certified lab sample kit or calculate your FCL container consignment with direct farm-gate pricing from Cuddalore, Tamil Nadu.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenRFQ && (
              <button
                onClick={onOpenRFQ}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-sm whitespace-nowrap"
              >
                Configure FCL Container / RFQ
              </button>
            )}
            <a
              href="https://wa.me/919894660672"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap"
            >
              WhatsApp: +91 9894660672
            </a>
          </div>
        </div>
      </div>

      {/* Batch Dossier Modal */}
      {selectedProof && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full border border-stone-200 shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between border-b border-stone-200 pb-3">
              <div>
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Verified Consignment Dossier
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  {selectedProof.company}
                </h3>
                <div className="text-xs text-stone-500 font-mono-numbers">
                  Batch Code: {selectedProof.batchCode} · {selectedProof.destinationPort}
                </div>
              </div>
              <button
                onClick={() => setSelectedProof(null)}
                className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md transition-colors cursor-pointer text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg space-y-1.5 border border-stone-200">
                <div className="flex justify-between">
                  <span className="text-stone-500">Commodity Shipped:</span>
                  <span className="font-semibold text-stone-900">{selectedProof.commodity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Total Volume:</span>
                  <span className="font-semibold text-stone-900">{selectedProof.volume} ({selectedProof.containerType})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Discharge Seaport:</span>
                  <span className="font-semibold text-emerald-800">{selectedProof.destinationPort}, {selectedProof.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Drayage Origin:</span>
                  <span className="font-semibold text-stone-900">S2S Global Exim Hub, Cuddalore → Chennai Port (CCTL)</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-semibold text-stone-900 block text-xs">
                  Analytical Verification Parameters:
                </span>
                <div className="space-y-1">
                  {selectedProof.inspectionHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-700 bg-emerald-50/70 p-2 rounded border border-emerald-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50/80 rounded border border-amber-200 text-stone-800 text-[11px] leading-relaxed">
                <strong>Certified Quality Result:</strong> {selectedProof.keyResult}. Official Phytosanitary and NABL COA dossiers are archived under S2S Global Exim compliance registrar.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-stone-200">
              <button
                onClick={() => setSelectedProof(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
              {onOpenRFQ && (
                <button
                  onClick={() => {
                    setSelectedProof(null);
                    onOpenRFQ();
                  }}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Request Similar Consignment
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
