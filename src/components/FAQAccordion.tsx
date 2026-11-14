import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ChevronDown,
  Ship,
  Package,
  CreditCard,
  ShieldCheck,
  Search,
  HelpCircle,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

type FAQCategory = 'ALL' | 'INCOTERMS' | 'MOQ' | 'PAYMENT' | 'COMPLIANCE';

interface FAQItem {
  id: string;
  category: Exclude<FAQCategory, 'ALL'>;
  question: string;
  answer: string;
  keyFacts: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-incoterms',
    category: 'INCOTERMS',
    question: 'Which Incoterms 2020 shipping terms do you support from India?',
    answer:
      'S2S Global Exim supports FOB (Free On Board) from Chennai Port (INMAA) and V.O. Chidambaranar Port, Tuticorin (INTUT), as well as CIF (Cost, Insurance & Freight) and CFR to any major international discharge seaport including Rotterdam, Hamburg, Felixstowe, New York, Los Angeles, and Jebel Ali. We also facilitate EXW (Ex-Works) pickup at our Cuddalore hub and rapid DHL/FedEx Air Freight for urgent 100kg–500kg consignments.',
    keyFacts: ['FOB Chennai / Tuticorin', 'CIF / CFR Global Ports', 'Air Freight Express Available'],
  },
  {
    id: 'faq-container-capacity',
    category: 'INCOTERMS',
    question: 'What are the loading capacities for 20ft FCL vs. 40ft FCL High Cube containers?',
    answer:
      'Depending on powder bulk density (e.g., light Moringa leaf powder vs. denser Turmeric, Onion, or Garlic powder), a 20ft standard container holds 10 to 14 Metric Tons (MT) palletized or up to 16 MT floor-loaded. A 40ft High Cube container accommodates 22 to 26 Metric Tons cleanly on Euro/ISPM-15 fumigated pallets with desiccant moisture control.',
    keyFacts: ['20ft FCL: 10–16 MT', '40ft HC: 22–26 MT', 'ISPM-15 Fumigated Pallets'],
  },
  {
    id: 'faq-moq',
    category: 'MOQ',
    question: 'What is your Minimum Order Quantity (MOQ) and can we mix multiple powders in one shipment?',
    answer:
      'Our standard commercial MOQ is 500 kg per botanical commodity (e.g., Moringa, Turmeric, Onion, Garlic, or Chili powder), with an overall minimum export order of 1 Metric Ton (1,000 kg) for LCL sea consolidation. Buyers regularly combine 4 to 8 different spice powders and dehydrated herbs inside a single 20ft or 40ft FCL mixed container directly in our B2B Order Portal.',
    keyFacts: ['500 kg per SKU MOQ', '1 MT LCL Sea Consolidation', 'Mixed-SKU Containers Supported'],
  },
  {
    id: 'faq-samples',
    category: 'MOQ',
    question: 'Can we evaluate a certified 2kg laboratory sample kit before placing a commercial container order?',
    answer:
      'Yes. We dispatch 2 kg multi-SKU evaluation kits (e.g., 500 g each of Moringa, Turmeric, Onion, and Garlic powders) via DHL Express or FedEx International Priority directly from Cuddalore. Every sample pouch carries the identical batch number, mesh specification, and NABL / Eurofins analytical COA template used for bulk production.',
    keyFacts: ['2 kg Multi-SKU Sample Kit', 'DHL / FedEx 4–6 Day Delivery', 'Batch-Matched COA Included'],
  },
  {
    id: 'faq-payment',
    category: 'PAYMENT',
    question: 'What international B2B payment methods and trade finance terms are accepted?',
    answer:
      'For verified commercial contracts, we accept Wire Transfer (T/T SWIFT) — typically 30% advance deposit upon Proforma Invoice confirmation and 70% balance against scanned Bill of Lading (B/L) and export dossier prior to vessel arrival — as well as Irrevocable Confirmed Letters of Credit (L/C at Sight) issued by top-tier international banks. Invoices can be settled in USD, EUR, GBP, or AED.',
    keyFacts: ['30% T/T Advance / 70% vs B/L', 'Irrevocable L/C at Sight', 'USD · EUR · GBP · AED'],
  },
  {
    id: 'faq-merchandise-exporter',
    category: 'PAYMENT',
    question: 'How does buying from S2S Global Exim as a Merchandise Exporter reduce landed costs?',
    answer:
      'S2S Global Exim operates strictly as a dedicated Merchandise Exporter coordinating directly with verified Tamil Nadu agro manufacturers and smallholder cooperatives across Cuddalore, Erode, Salem, and Dindigul. By eliminating intermediary brokers, domestic mandi traders, and multi-layered trading houses, overseas food brands receive direct origin pricing alongside single-point export documentation.',
    keyFacts: ['Zero Middlemen Brokerage', 'Direct Origin Allocation', 'Single-Point Export Desk'],
  },
  {
    id: 'faq-packaging',
    category: 'COMPLIANCE',
    question: 'What export packaging prevents moisture absorption and caking during ocean transit?',
    answer:
      'All powders (especially hygroscopic Onion and Garlic powders) are packed in food-grade 20 kg or 25 kg multiwall Kraft paper bags lined with high-barrier, nitrogen-flushed LDPE/aluminum foil inner pouches, or 25 kg HDPE fiber drums. Heavy-duty container desiccant strips and moisture-barrier wraps protect cargo across humid equatorial shipping lanes.',
    keyFacts: ['25 kg Kraft + Foil Liner', 'Nitrogen-Flushed Moisture Barrier', 'Private-Label OEM Available'],
  },
  {
    id: 'faq-customs-docs',
    category: 'COMPLIANCE',
    question: 'What customs, phytosanitary, and lab documents are included with every shipment?',
    answer:
      'Every commercial consignment is accompanied by a complete customs clearance set: Commercial Invoice, Packing List, Non-Negotiable/Original Bill of Lading, Certificate of Origin (Chamber of Commerce / GSP), Official Phytosanitary Certificate, Spices Board / APEDA Registration, Health Certificate, Halal Certificate (on request), and a batch-specific NABL or Eurofins Certificate of Analysis confirming zero ETO, zero Sudan dyes, and heavy metal / microbial compliance.',
    keyFacts: ['Eurofins / NABL Batch COA', 'Phytosanitary & Origin Cert', '100% ETO-Free Steam Guarantee'],
  },
];

interface FAQAccordionProps {
  onOpenRFQ: () => void;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ onOpenRFQ }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-incoterms', 'faq-moq', 'faq-payment']);

  const categories: { id: FAQCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'ALL', label: 'All Topics', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'INCOTERMS', label: 'Incoterms & Logistics', icon: <Ship className="w-3.5 h-3.5" /> },
    { id: 'MOQ', label: 'MOQ & Samples', icon: <Package className="w-3.5 h-3.5" /> },
    { id: 'PAYMENT', label: 'Payments & Terms', icon: <CreditCard className="w-3.5 h-3.5" /> },
    { id: 'COMPLIANCE', label: 'Quality & Customs', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.keyFacts.some((fact) => fact.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allExpanded =
    filteredFaqs.length > 0 && filteredFaqs.every((item) => openIds.includes(item.id));

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(filteredFaqs.map((item) => item.id));
    }
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded text-[11px] font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-800" />
              <span>{t('faq.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              {t('faq.title')}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {t('faq.subtitle')}
            </p>
          </div>

          {/* Search box */}
          <div className="w-full lg:w-80 relative shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Incoterms, MOQ, L/C, COA..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs + Expand/Collapse Control */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-2xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleToggleAll}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer self-start sm:self-center shrink-0"
          >
            {allExpanded ? 'Collapse All Answers' : 'Expand All Answers'}
          </button>
        </div>

        {/* Accordion Grid */}
        {filteredFaqs.length === 0 ? (
          <div className="p-8 bg-stone-50 border border-stone-200 rounded-xl text-center space-y-2">
            <p className="text-sm font-semibold text-stone-800">
              No export FAQ matched "{searchQuery}"
            </p>
            <p className="text-xs text-stone-500">
              Try clearing your filter or contact our Cuddalore export desk directly via WhatsApp (+91 9894660672).
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`border rounded-xl transition-all ${
                    isOpen
                      ? 'bg-stone-50/70 border-emerald-800/30 shadow-2xs'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <span className="font-mono-numbers text-xs font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-200 rounded px-2 py-0.5 shrink-0 mt-0.5 sm:mt-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 pl-5 sm:pl-16 space-y-3 border-t border-stone-200/60">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-2">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {faq.keyFacts.map((fact, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded bg-white border border-stone-200 text-[11px] font-medium font-mono-numbers text-stone-800"
                          >
                            {fact}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Direct Trade Support Banner */}
        <div className="bg-stone-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              {t('faq.ctaTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {t('faq.ctaSubtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <span>{t('faq.ctaButton')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/919894660672"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-amber-300 rounded-lg text-xs font-semibold transition-colors font-mono-numbers"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>+91 9894660672</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
