import React, { useState } from 'react';
import { PRODUCTS, CURRENCY_RATES } from '../data/products';
import { CurrencyCode, Incoterm, PackagingType, RFQItem, RFQSubmission } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Container, Plus, Trash2, CheckCircle2, FileText, Send, Printer, ArrowRight, ShieldCheck } from 'lucide-react';

interface B2BOrderPortalProps {
  currency: CurrencyCode;
  initialItems?: RFQItem[];
}

export const B2BOrderPortal: React.FC<B2BOrderPortalProps> = ({
  currency,
  initialItems = [],
}) => {
  const { t } = useLanguage();
  // Container selection
  const [containerType, setContainerType] = useState<'20ft FCL' | '40ft HC' | 'LCL (Palletized)' | 'Air Express Sample'>('20ft FCL');
  
  // Incoterm selection
  const [incoterm, setIncoterm] = useState<Incoterm>('CIF Destination Port');
  
  // Destination Port & Buyer information
  const [destinationPort, setDestinationPort] = useState<string>('Port of Rotterdam, Netherlands');
  const [buyerName, setBuyerName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneWhatsapp, setPhoneWhatsapp] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [includeSampleKit, setIncludeSampleKit] = useState<boolean>(true);

  // RFQ Items
  const [items, setItems] = useState<RFQItem[]>(
    initialItems.length > 0
      ? initialItems
      : [
          {
            productId: 'moringa-powder',
            productName: 'Organic Moringa Oleifera Leaf Powder',
            meshSize: '100 Mesh (Fine Tea & Blends)',
            packaging: '25kg Multi-layer Kraft Paper Bag (Inner Poly Liner)',
            quantityMetricTons: 5.0,
          },
          {
            productId: 'turmeric-powder',
            productName: 'High-Curcumin Turmeric Finger Powder',
            meshSize: '80 Mesh (Industrial Food Seasoning)',
            packaging: '25kg Multi-layer Kraft Paper Bag (Inner Poly Liner)',
            quantityMetricTons: 7.0,
          },
        ]
  );

  // Submission State
  const [submittedRFQ, setSubmittedRFQ] = useState<RFQSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Currency computation
  const rate = CURRENCY_RATES[currency]?.rateFromUSD || 1.0;
  const symbol = CURRENCY_RATES[currency]?.symbol || '$';

  // Container Limits
  const containerLimits: Record<string, { maxMT: number; optimalMinMT: number }> = {
    '20ft FCL': { maxMT: 14.5, optimalMinMT: 12.0 },
    '40ft HC': { maxMT: 26.0, optimalMinMT: 22.0 },
    'LCL (Palletized)': { maxMT: 10.0, optimalMinMT: 1.0 },
    'Air Express Sample': { maxMT: 0.05, optimalMinMT: 0.002 },
  };

  const totalLoadedMT = items.reduce((acc, it) => acc + (it.quantityMetricTons || 0), 0);
  const currentMax = containerLimits[containerType].maxMT;
  const utilizationPercentage = Math.min(100, Math.round((totalLoadedMT / currentMax) * 100));

  // Price estimate calculation
  const calculateTotalUSD = () => {
    let productTotal = 0;
    items.forEach((item) => {
      const prod = PRODUCTS.find((p) => p.id === item.productId);
      const pricePerKg = prod?.basePriceUSDPerKg || 4.5;
      const kg = (item.quantityMetricTons || 0) * 1000;
      productTotal += pricePerKg * kg;
    });

    // Freight estimate additions based on Incoterm
    let freightEstimate = 0;
    if (incoterm.startsWith('CIF')) {
      freightEstimate = totalLoadedMT * 120 + 400; // estimated ocean freight & insurance per MT
    } else if (incoterm.startsWith('CFR')) {
      freightEstimate = totalLoadedMT * 105 + 250;
    }

    if (includeSampleKit) {
      productTotal += 85; // Sample preparation & air phytosanitary courier base fee
    }

    return productTotal + freightEstimate;
  };

  const totalEstimatedUSD = calculateTotalUSD();
  const totalInSelectedCurrency = totalEstimatedUSD * rate;

  const handleAddItem = () => {
    const defaultProd = PRODUCTS[0];
    setItems([
      ...items,
      {
        productId: defaultProd.id,
        productName: defaultProd.name,
        meshSize: defaultProd.meshOptions[0],
        packaging: defaultProd.packagingOptions[0],
        quantityMetricTons: 1.0,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: keyof RFQItem, value: any) => {
    const updated = [...items];
    if (field === 'productId') {
      const prod = PRODUCTS.find((p) => p.id === value);
      updated[index] = {
        ...updated[index],
        productId: value,
        productName: prod?.name || '',
        meshSize: prod?.meshOptions[0] || '',
        packaging: prod?.packagingOptions[0] || '',
      };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    setItems(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission: RFQSubmission = {
      id: `S2S-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerName: buyerName || 'Trade Buyer',
      companyName: companyName || 'International Food/Nutra Importer',
      country: country || 'Global Buyer',
      email,
      phoneWhatsapp,
      destinationPort,
      incoterm,
      targetCurrency: currency,
      items,
      containerRequirement: containerType,
      customNotes: notes,
      estimatedTotalUSD: totalEstimatedUSD,
      submittedAt: new Date().toISOString().split('T')[0],
    };

    setTimeout(() => {
      setSubmittedRFQ(submission);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="b2b-portal" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Direct Trade Desk · B2B Wholesale Portal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              {t('portal.title')}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl">
              {t('portal.subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-numbers px-3 py-1.5 bg-white border border-stone-200 rounded-lg shadow-2xs self-start md:self-end">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Direct Manufacturer Pricing · Zero Broker Fees</span>
          </div>
        </div>

        {/* If submitted, show Official Quotation Slip */}
        {submittedRFQ ? (
          <div className="bg-white border border-emerald-900/30 rounded-xl p-6 sm:p-10 shadow-xl space-y-8 max-w-4xl mx-auto">
            {/* Header of Proforma Slip with Official Logo */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-emerald-900/20 bg-white shrink-0 shadow-xs">
                  <img
                    src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
                    alt="S2S Global Exim Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    S2S Global Exim · Merchandise Exporter
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 font-display mt-0.5">
                    Proforma Reference: <span className="font-mono-numbers text-emerald-900">{submittedRFQ.id}</span>
                  </h3>
                  <div className="text-xs text-stone-500 mt-1">
                    Corporate Office: 113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, India
                  </div>
                  <div className="text-xs text-emerald-800 font-mono-numbers mt-0.5">
                    WhatsApp: +91 9894660672 · Date: {submittedRFQ.submittedAt}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Proforma Slip</span>
                </button>
                <button
                  onClick={() => setSubmittedRFQ(null)}
                  className="px-3 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer"
                >
                  Configure New RFQ
                </button>
              </div>
            </div>

            {/* Importer & Consignment Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-stone-400 block uppercase">Importer / Buyer</span>
                <strong className="text-stone-900 block text-sm">{submittedRFQ.buyerName}</strong>
                <span className="text-stone-600">{submittedRFQ.companyName}</span>
                <div className="text-stone-500 mt-1">{submittedRFQ.country}</div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-stone-400 block uppercase">Destination Port</span>
                <strong className="text-stone-900 block text-sm">{submittedRFQ.destinationPort}</strong>
                <span className="text-emerald-800 font-semibold">{submittedRFQ.incoterm}</span>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                <span className="text-stone-400 block uppercase">Container Plan</span>
                <strong className="text-stone-900 block text-sm">{submittedRFQ.containerRequirement}</strong>
                <span className="text-stone-600 font-mono-numbers">{totalLoadedMT.toFixed(2)} Metric Tons Total</span>
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <span className="text-emerald-800 block uppercase">Estimated Proforma Total</span>
                <strong className="text-emerald-950 block text-lg font-mono-numbers font-bold">
                  {symbol}{totalInSelectedCurrency.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </strong>
                <span className="text-[11px] text-emerald-800 font-mono-numbers">
                  (~${submittedRFQ.estimatedTotalUSD.toLocaleString()} USD)
                </span>
              </div>
            </div>

            {/* Itemized Table */}
            <div className="border border-stone-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200">
                  <tr>
                    <th className="py-2.5 px-3">Product Name</th>
                    <th className="py-2.5 px-3">Mesh Fineness</th>
                    <th className="py-2.5 px-3">Packaging Spec</th>
                    <th className="py-2.5 px-3 text-right">Quantity</th>
                    <th className="py-2.5 px-3 text-right">Est. Unit Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono-numbers">
                  {submittedRFQ.items.map((it, idx) => {
                    const prod = PRODUCTS.find((p) => p.id === it.productId);
                    const unitPriceUSD = prod?.basePriceUSDPerKg || 4.0;
                    return (
                      <tr key={idx} className="hover:bg-stone-50/50">
                        <td className="py-2.5 px-3 font-sans font-medium text-stone-900">
                          {it.productName}
                        </td>
                        <td className="py-2.5 px-3 text-stone-600 font-sans">{it.meshSize}</td>
                        <td className="py-2.5 px-3 text-stone-600 font-sans">{it.packaging}</td>
                        <td className="py-2.5 px-3 text-right font-semibold text-stone-900">
                          {it.quantityMetricTons} MT ({(it.quantityMetricTons * 1000).toLocaleString()} kg)
                        </td>
                        <td className="py-2.5 px-3 text-right text-emerald-800 font-semibold">
                          {symbol}{(unitPriceUSD * rate).toFixed(2)} / kg
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Next steps notice */}
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Next Operational Steps with S2S Global Exim Desk:</span>
              </div>
              <p>
                Our international export manager at Cuddalore will contact your representative at <strong className="text-stone-900">{submittedRFQ.email || submittedRFQ.phoneWhatsapp}</strong> within 12 hours with the formal stamped Proforma Invoice, ocean shipping schedules from Chennai/Tuticorin, and official phytosanitary batch dossiers. You can also connect directly via WhatsApp at <a href="https://wa.me/919894660672" className="text-emerald-800 font-semibold underline">+91 9894660672</a>.
              </p>
            </div>
          </div>
        ) : (
          /* Normal RFQ Configurator Form */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Container & Product Builder */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Select Container Type */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Container className="w-5 h-5 text-emerald-800" />
                    <h3 className="text-base font-bold text-stone-900 font-display">
                      {t('portal.step1')}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-500">Ocean Drayage & Sea Freight</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {(['20ft FCL', '40ft HC', 'LCL (Palletized)', 'Air Express Sample'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setContainerType(type)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        containerType === type
                          ? 'border-emerald-700 bg-emerald-50/50 text-emerald-950 font-semibold shadow-xs'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-bold text-sm">{type}</div>
                      <div className="text-[11px] text-stone-500 mt-1">
                        Cap: {containerLimits[type].maxMT} MT max
                      </div>
                    </button>
                  ))}
                </div>

                {/* Real-time Container Fill Gauge */}
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-800">
                      Container Load Gauge ({containerType}):
                    </span>
                    <span className="font-mono-numbers font-bold text-stone-900">
                      {totalLoadedMT.toFixed(2)} MT / {currentMax} MT Max ({utilizationPercentage}%)
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-stone-200 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        totalLoadedMT > currentMax
                          ? 'bg-rose-600'
                          : utilizationPercentage >= 80
                          ? 'bg-emerald-600'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.min(100, utilizationPercentage)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span>
                      {totalLoadedMT > currentMax ? (
                        <span className="text-rose-600 font-semibold">Exceeds container payload rating! Switch to 40ft HC or reduce MT.</span>
                      ) : utilizationPercentage < 70 ? (
                        <span>Consider adding {Math.max(0, currentMax - totalLoadedMT).toFixed(1)} MT to maximize maritime freight savings.</span>
                      ) : (
                        <span className="text-emerald-700 font-semibold">Optimal container payload density for ocean drayage.</span>
                      )}
                    </span>
                    <span className="font-mono-numbers">{(totalLoadedMT * 1000).toLocaleString()} kg net</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Product Consignment Items */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-stone-900 font-display">
                      {t('portal.step2')}
                    </h3>
                    <p className="text-xs text-stone-500">
                      Customize mesh fineness and packaging type for each commodity
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{t('portal.addPowder')}</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {items.map((item, index) => {
                    const currentProd = PRODUCTS.find((p) => p.id === item.productId) || PRODUCTS[0];
                    return (
                      <div
                        key={index}
                        className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-3 relative"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                          {/* Product select */}
                          <div className="sm:col-span-4">
                            <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                              Botanical Powder
                            </label>
                            <select
                              value={item.productId}
                              onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
                              className="w-full bg-white border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                            >
                              {PRODUCTS.map((prod) => (
                                <option key={prod.id} value={prod.id}>
                                  {prod.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Mesh Size */}
                          <div className="sm:col-span-3">
                            <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                              Particle Mesh
                            </label>
                            <select
                              value={item.meshSize}
                              onChange={(e) => handleItemChange(index, 'meshSize', e.target.value)}
                              className="w-full bg-white border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                            >
                              {currentProd.meshOptions.map((mesh, mIdx) => (
                                <option key={mIdx} value={mesh}>
                                  {mesh}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Packaging */}
                          <div className="sm:col-span-3">
                            <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                              Packaging Spec
                            </label>
                            <select
                              value={item.packaging}
                              onChange={(e) => handleItemChange(index, 'packaging', e.target.value)}
                              className="w-full bg-white border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                            >
                              {currentProd.packagingOptions.map((pkg, pIdx) => (
                                <option key={pIdx} value={pkg}>
                                  {pkg}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Quantity in Metric Tons */}
                          <div className="sm:col-span-2">
                            <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                              Quantity (MT)
                            </label>
                            <div className="flex items-center gap-1.5">
                              <input
                                type="number"
                                step="0.5"
                                min="0.1"
                                max="30"
                                value={item.quantityMetricTons}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    'quantityMetricTons',
                                    parseFloat(e.target.value) || 0
                                  )
                                }
                                className="w-full bg-white border border-stone-300 rounded-md px-2 py-2 text-xs font-mono-numbers text-stone-900 focus:outline-none focus:border-emerald-700 text-right"
                              />
                              {items.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveItem(index)}
                                  className="p-2 text-stone-400 hover:text-rose-600 transition-colors"
                                  title="Remove item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                          <span>
                            HS Code: <strong className="text-stone-700 font-mono-numbers">{currentProd.hsCode}</strong> · Direct Tamil Nadu origin
                          </span>
                          <span className="font-mono-numbers">
                            Net Weight: {(item.quantityMetricTons * 1000).toLocaleString()} kg · Est: {symbol}{((currentProd.basePriceUSDPerKg * item.quantityMetricTons * 1000) * rate).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Incoterms & Trade Destination */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
                <h3 className="text-base font-bold text-stone-900 font-display">
                  {t('portal.step3')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t('portal.incotermsLabel')}
                    </label>
                    <select
                      value={incoterm}
                      onChange={(e) => setIncoterm(e.target.value as Incoterm)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                    >
                      <option value="CIF Destination Port">CIF Destination Port (Cost, Insurance & Freight Included)</option>
                      <option value="FOB Chennai Port">FOB Chennai Port (Free On Board India)</option>
                      <option value="FOB Tuticorin Port">FOB VOC Port Tuticorin (Free On Board India)</option>
                      <option value="CFR Destination Port">CFR Destination Port (Cost and Freight)</option>
                      <option value="EXW Cuddalore Facility">EXW Cuddalore Facility (Ex-Works Cuddalore)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t('portal.targetPort')}
                    </label>
                    <input
                      type="text"
                      required
                      value={destinationPort}
                      onChange={(e) => setDestinationPort(e.target.value)}
                      placeholder="e.g. Port of Rotterdam (NL) or Port of New York (US)"
                      className="w-full bg-white border border-stone-300 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                    />
                  </div>
                </div>

                {/* Sample Kit toggle */}
                <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-stone-900">
                      {t('portal.sampleCheckbox')}
                    </span>
                    <p className="text-[11px] text-stone-600">
                      Pre-dispatch air shipment via DHL/FedEx with full phytosanitary clearance certificate & batch COA.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeSampleKit}
                    onChange={(e) => setIncludeSampleKit(e.target.checked)}
                    className="w-4 h-4 text-emerald-800 rounded focus:ring-emerald-700"
                  />
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Buyer Credentials & Instant Proforma Summary */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              {/* Proforma Cost Estimation Box */}
              <div className="bg-stone-900 text-white border border-stone-800 rounded-xl p-6 space-y-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Export Proforma Estimate
                  </span>
                  <span className="text-xs font-mono-numbers px-2 py-0.5 bg-stone-800 rounded text-stone-300">
                    {currency}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span>{t('portal.totalCargo')}:</span>
                    <span className="font-mono-numbers text-white font-semibold">
                      {totalLoadedMT.toFixed(2)} MT ({(totalLoadedMT * 1000).toLocaleString()} kg)
                    </span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Shipping Incoterm:</span>
                    <span className="text-amber-300">{incoterm.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Container Spec:</span>
                    <span className="text-stone-200">{containerType}</span>
                  </div>
                  {includeSampleKit && (
                    <div className="flex justify-between text-emerald-400 text-[11px]">
                      <span>Air Sample Kit + COA:</span>
                      <span>Included</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-stone-800 flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-stone-400">{t('portal.proformaTotal')}</div>
                      <div className="text-[10px] text-stone-500 font-mono-numbers">(Direct Farm-Gate Basis)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold font-mono-numbers text-emerald-400">
                        {symbol}{totalInSelectedCurrency.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-[11px] text-stone-400 font-mono-numbers">
                        ~${totalEstimatedUSD.toLocaleString()} USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Importer Credentials Form */}
              <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-stone-900 font-display">
                  {t('portal.step4')}
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                      Contact Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="e.g. David Vance, Procurement Director"
                      className="w-full bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. EuroNordic Spice Blenders B.V."
                      className="w-full bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. Germany"
                        className="w-full bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="purchasing@company.com"
                        className="w-full bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                      Direct WhatsApp / Phone (With Country Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneWhatsapp}
                      onChange={(e) => setPhoneWhatsapp(e.target.value)}
                      placeholder="+31 6 1234 5678"
                      className="w-full bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700 font-mono-numbers"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                      Special Requirements (Custom Mesh, Private Label, ETO test)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Require 100 mesh organic moringa with EU MRL pesticide screen."
                      className="w-full bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-emerald-700"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || totalLoadedMT <= 0}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Generating Stamped Proforma...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{t('portal.submitRFQ')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
