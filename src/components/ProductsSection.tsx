import React, { useState } from 'react';
import { ProductSpec, CurrencyCode } from '../types';
import { PRODUCTS, CURRENCY_RATES } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { FileText, ArrowRight, CheckCircle2, X, Download, ShieldCheck, Image as ImageIcon, Sparkles, Layers } from 'lucide-react';

interface ProductsSectionProps {
  currency: CurrencyCode;
  onSelectForRFQ: (product: ProductSpec, isSampleOnly?: boolean) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  currency,
  onSelectForRFQ,
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductSpec | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState<number>(0);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);
  const [showCatalogSheetModal, setShowCatalogSheetModal] = useState<string | null>(null);

  const rate = CURRENCY_RATES[currency]?.rateFromUSD || 1.0;
  const symbol = CURRENCY_RATES[currency]?.symbol || '$';

  const categories = [
    { id: 'all', label: t('prod.catAll') },
    { id: 'core-powders', label: t('prod.catCore') },
    { id: 'ground-spices', label: t('prod.catSpices') },
    { id: 'dehydrated-herbs', label: t('prod.catHerbs') },
    { id: 'floral-botanicals', label: t('prod.catFloral') },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const formatPrice = (usdPrice: number) => {
    const converted = usdPrice * rate;
    return `${symbol}${converted.toFixed(2)}`;
  };

  const handleSimulateCOADownload = (product: ProductSpec) => {
    setDownloadSuccessToast(`Downloading Official Batch COA (${product.coaSample.batchNumber}) PDF...`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  const openProductModal = (product: ProductSpec) => {
    setActiveModalProduct(product);
    setActiveModalImageIndex(0);
  };

  return (
    <section id="products" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Full Merchandise Export Catalog · S2S Global Exim</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              {t('prod.title')}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t('prod.subtitle')}
            </p>
          </div>

          {/* Catalog Sheets Quick Trigger */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setShowCatalogSheetModal('spices')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>{t('prod.spicesSheet')}</span>
            </button>
            <button
              onClick={() => setShowCatalogSheetModal('herbs')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t('prod.herbalSheet')}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-900 text-white font-semibold shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
            return (
              <div
                key={product.id}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Slot with Gallery Preview */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* HS Code tag */}
                  <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-xs text-white text-[11px] font-mono-numbers px-2.5 py-1 rounded">
                    HS {product.hsCode}
                  </div>

                  {/* Multi-photo indicator if more than 1 image */}
                  {galleryImages.length > 1 && (
                    <div className="absolute top-3 right-3 bg-stone-950/85 backdrop-blur-xs text-amber-300 text-[10px] font-mono-numbers px-2 py-1 rounded flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      <span>{galleryImages.length} Views</span>
                    </div>
                  )}

                  {/* Origin badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-2 rounded-lg border border-stone-200 text-xs text-stone-800 flex items-center justify-between">
                    <span className="font-medium truncate">{product.origin}</span>
                    <span className="text-emerald-800 font-semibold text-[11px] shrink-0 ml-2">Export Grade</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div>
                      <div className="text-[11px] italic text-stone-500 truncate">{product.botanicalName}</div>
                      <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Active Bioactives strip */}
                    <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 space-y-1">
                      <div className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider">
                        Bioactive Specification
                      </div>
                      <div className="text-xs font-mono-numbers text-stone-800">
                        {product.activeBioactives[0] ? (
                          <span>
                            <strong className="text-emerald-800 font-semibold">{product.activeBioactives[0].name}:</strong> {product.activeBioactives[0].percentage}
                          </span>
                        ) : (
                          <span>Standardized Export Quality</span>
                        )}
                      </div>
                    </div>

                    {/* Commercial Benchmark & MOQ */}
                    <div className="grid grid-cols-2 gap-2 py-2 border-y border-stone-100 text-xs">
                      <div>
                        <div className="text-stone-400 text-[11px]">{t('prod.benchmark')}</div>
                        <div className="text-sm font-bold font-mono-numbers text-stone-900">
                          {formatPrice(product.basePriceUSDPerKg)} <span className="text-[10px] font-normal text-stone-500">/ kg FOB</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-stone-400 text-[11px]">{t('prod.moq')}</div>
                        <div className="text-sm font-semibold font-mono-numbers text-stone-900">
                          {product.moqCommercialKg.toLocaleString()} kg
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => openProductModal(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t('prod.fullSpecs')}</span>
                    </button>

                    <button
                      onClick={() => onSelectForRFQ(product, false)}
                      className="inline-flex items-center justify-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs"
                    >
                      <span>{t('prod.addRFQ')}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Catalog Sheets Showcase (Directly from User's Attachments) */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white rounded-xl p-6 sm:p-8 border border-stone-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Direct Export Catalog Sheets · 25+ Available Commodities
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Complete Ground Spices &amp; Dehydrated Leaves Line
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                S2S Global Exim aggregates, tests, and packs the full spectrum of Indian spices and dehydrated herbs for global containerized delivery.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-numbers text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded">
                Custom Blends &amp; Private Label Available
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sheet 1: Spices and Seeds */}
            <div
              onClick={() => setShowCatalogSheetModal('spices')}
              className="bg-stone-900/90 border border-stone-800 rounded-xl overflow-hidden hover:border-amber-400 transition-all cursor-pointer group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-950">
                <img
                  src="/public/assets/aistudio/IMG-20261106-WA0046_1bebb84b.jpg"
                  alt="S2S Global Exim Ground Spices Catalog"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-bold text-white font-display">
                  12 Ground Spices &amp; Whole Seeds Matrix
                </div>
              </div>
              <div className="p-4 space-y-2 text-xs text-stone-300">
                <div className="font-semibold text-amber-300">Includes:</div>
                <p className="line-clamp-2 text-stone-400">
                  Red Chilli Powder, Turmeric, Coriander, Black Pepper, Cumin, Fennel, Fenugreek, Nutmeg, Cinnamon, Bay Leaves, Poppy Seeds, and Yellow Mustard Seeds.
                </p>
                <div className="text-[11px] text-emerald-400 underline">Click to expand full high-res sheet &rarr;</div>
              </div>
            </div>

            {/* Sheet 2: Dehydrated Leaves and Herbs */}
            <div
              onClick={() => setShowCatalogSheetModal('herbs')}
              className="bg-stone-900/90 border border-stone-800 rounded-xl overflow-hidden hover:border-emerald-400 transition-all cursor-pointer group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-950">
                <img
                  src="/public/assets/aistudio/IMG-20261106-WA0043_e9e8b3f5.jpg"
                  alt="S2S Global Exim Dehydrated Leaves Catalog"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-bold text-white font-display">
                  13 Dehydrated Leaves, Herbs &amp; Floral Powders
                </div>
              </div>
              <div className="p-4 space-y-2 text-xs text-stone-300">
                <div className="font-semibold text-emerald-400">Includes:</div>
                <p className="line-clamp-2 text-stone-400">
                  Dried Parsley, Chives, Oregano, Curry Leaves, Mint, Kasuri Methi, Coriander Leaves, Rose Petal Powder, Spinach, Moringa, Tulsi, Neem Powder, and Lemon Grass.
                </p>
                <div className="text-[11px] text-emerald-400 underline">Click to expand full high-res sheet &rarr;</div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast alert */}
        {downloadSuccessToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-lg shadow-xl text-xs flex items-center gap-3 border border-stone-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{downloadSuccessToast}</span>
          </div>
        )}

        {/* Modal: Full Catalog Sheet Zoom */}
        {showCatalogSheetModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-stone-700 rounded-xl max-w-4xl w-full p-6 space-y-4 relative">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <h3 className="text-lg font-bold text-white font-display">
                  {showCatalogSheetModal === 'spices'
                    ? 'S2S Global Exim Ground Spices & Seeds Collection'
                    : 'S2S Global Exim Dehydrated Leaves, Herbs & Botanicals'}
                </h3>
                <button
                  onClick={() => setShowCatalogSheetModal(null)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-lg overflow-hidden border border-stone-800 bg-black max-h-[75vh] flex items-center justify-center">
                <img
                  src={
                    showCatalogSheetModal === 'spices'
                      ? '/public/assets/aistudio/IMG-20261106-WA0046_1bebb84b.jpg'
                      : '/public/assets/aistudio/IMG-20261106-WA0043_e9e8b3f5.jpg'
                  }
                  alt="Catalog Sheet"
                  className="w-full h-auto max-h-[75vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-300">
                <span>All commodities available for FCL / LCL export from Cuddalore, Tamil Nadu.</span>
                <a
                  href="https://wa.me/919894660672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-lg text-center"
                >
                  Inquire on WhatsApp (+91 9894660672)
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Technical Specification & Certificate of Analysis (COA) Viewer with Gallery Switcher */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
            <div className="bg-white rounded-xl border border-stone-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    S2S Global Exim · Technical Specification Sheet &amp; Lab COA
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    {activeModalProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-900 rounded-md transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6 text-sm">
                {/* Multi-Image Gallery Switcher inside Modal */}
                {activeModalProduct.gallery && activeModalProduct.gallery.length > 0 && (
                  <div className="space-y-3">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                      <img
                        src={activeModalProduct.gallery[activeModalImageIndex] || activeModalProduct.image}
                        alt={activeModalProduct.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {activeModalProduct.gallery.length > 1 && (
                      <div className="flex items-center gap-2 overflow-x-auto">
                        {activeModalProduct.gallery.map((imgSrc, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveModalImageIndex(idx)}
                            className={`w-16 h-12 rounded border overflow-hidden transition-all cursor-pointer ${
                              activeModalImageIndex === idx
                                ? 'border-emerald-700 ring-2 ring-emerald-700/20'
                                : 'border-stone-200 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img src={imgSrc} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Botanical & Overview */}
                <div className="space-y-2">
                  <div className="text-xs text-stone-500 font-mono-numbers">
                    Botanical: <strong className="text-stone-800">{activeModalProduct.botanicalName}</strong> · HS Code: <strong className="text-stone-800">{activeModalProduct.hsCode}</strong>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    {activeModalProduct.detailedOverview}
                  </p>
                </div>

                {/* Sensory Profile */}
                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2">
                    Sensory Evaluation Standards
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-stone-500 block">Color</span>
                      <strong className="text-stone-800">{activeModalProduct.sensoryProfile.color}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Aroma</span>
                      <strong className="text-stone-800">{activeModalProduct.sensoryProfile.aroma}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Taste</span>
                      <strong className="text-stone-800">{activeModalProduct.sensoryProfile.taste}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Particle State</span>
                      <strong className="text-stone-800">{activeModalProduct.sensoryProfile.appearance}</strong>
                    </div>
                  </div>
                </div>

                {/* Key Chemical & Physical Parameters Table */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-stone-900">
                      Standard Chemical, Physical &amp; Microbial Limits
                    </h4>
                    <span className="text-xs text-stone-500">ASTA / AOAC Standards</span>
                  </div>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200">
                        <tr>
                          <th className="py-2.5 px-3">Parameter Tested</th>
                          <th className="py-2.5 px-3">Export Specification</th>
                          <th className="py-2.5 px-3">Test Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-mono-numbers">
                        {activeModalProduct.keyParameters.map((item, idx) => (
                          <tr key={idx} className="hover:bg-stone-50/70">
                            <td className="py-2 px-3 font-sans font-medium text-stone-800">
                              {item.parameter}
                            </td>
                            <td className="py-2 px-3 text-emerald-800 font-semibold">
                              {item.specification}
                            </td>
                            <td className="py-2 px-3 text-stone-500 font-sans">
                              {item.standardMethod}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Official Batch COA Sample Preview */}
                <div className="border border-emerald-900/30 bg-emerald-50/40 p-5 rounded-lg space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-900/20 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-800" />
                        <span className="font-bold text-emerald-950">Official Certificate of Analysis (COA)</span>
                      </div>
                      <div className="text-xs text-emerald-800 mt-0.5">
                        Batch: <span className="font-mono-numbers font-semibold">{activeModalProduct.coaSample.batchNumber}</span> · Lab: {activeModalProduct.coaSample.testingLab}
                      </div>
                    </div>
                    <button
                      onClick={() => handleSimulateCOADownload(activeModalProduct)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded text-xs font-semibold cursor-pointer shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Certified COA (PDF)</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeModalProduct.coaSample.parameters.map((param, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-white rounded border border-emerald-100">
                        <span className="text-stone-700">{param.test}</span>
                        <div className="flex items-center gap-2 font-mono-numbers">
                          <span className="font-semibold text-stone-900">{param.result}</span>
                          <span className="text-[10px] text-emerald-700 font-sans px-1.5 py-0.5 bg-emerald-100 rounded">
                            {param.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packaging & Mesh */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                    <span className="font-semibold text-stone-800">Export Packaging Options:</span>
                    <ul className="space-y-1 text-stone-600 list-disc list-inside">
                      {activeModalProduct.packagingOptions.map((pkg, i) => (
                        <li key={i}>{pkg}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                    <span className="font-semibold text-stone-800">Available Mesh Sieve Sizes:</span>
                    <ul className="space-y-1 text-stone-600 list-disc list-inside">
                      {activeModalProduct.meshOptions.map((mesh, i) => (
                        <li key={i}>{mesh}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Modal Action */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      onSelectForRFQ(activeModalProduct, true);
                      setActiveModalProduct(null);
                    }}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Request 2kg Lab Sample Kit
                  </button>

                  <button
                    onClick={() => {
                      onSelectForRFQ(activeModalProduct, false);
                      setActiveModalProduct(null);
                    }}
                    className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer"
                  >
                    Add {activeModalProduct.name.split(' ')[0]} to Commercial RFQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
