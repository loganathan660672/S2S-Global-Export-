import React, { useState } from 'react';
import { SUPPLY_NODES, SUPPLY_STEPS, GLOBAL_TRADE_LANES, TRACEABILITY_SAMPLES } from '../data/supplyChain';
import { SupplyChainNode, GlobalTradeLane } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Ship, Compass, ArrowRight, ShieldCheck, CheckCircle2, Search, Anchor } from 'lucide-react';

export const SupplyChainMap: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'regional' | 'global'>('regional');
  const [selectedNode, setSelectedNode] = useState<SupplyChainNode>(SUPPLY_NODES[0]);
  const [selectedLane, setSelectedLane] = useState<GlobalTradeLane>(GLOBAL_TRADE_LANES[0]);
  const [batchCodeInput, setBatchCodeInput] = useState<string>('S2S-MOR-2026-B812');
  const [activeBatchResult, setActiveBatchResult] = useState<typeof TRACEABILITY_SAMPLES['S2S-MOR-2026-B812'] | null>(
    TRACEABILITY_SAMPLES['S2S-MOR-2026-B812']
  );
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleBatchSearch = (codeToSearch?: string) => {
    const code = (codeToSearch || batchCodeInput).trim().toUpperCase();
    if (TRACEABILITY_SAMPLES[code]) {
      setActiveBatchResult(TRACEABILITY_SAMPLES[code]);
      setBatchCodeInput(code);
      setSearchError(null);
    } else {
      setSearchError(`Batch "${code}" not found. Try one of our verified sample batches below.`);
    }
  };

  return (
    <section id="supply-chain" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Supply Chain Transparency & Provenance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              {t('map.title')}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {t('map.subtitle')}
            </p>
          </div>

          {/* Interactive Map View Toggle */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-800 rounded-lg self-start md:self-end">
            <button
              onClick={() => setActiveTab('regional')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'regional'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{t('map.tabRegional')}</span>
            </button>
            <button
              onClick={() => setActiveTab('global')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'global'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>{t('map.tabGlobal')}</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Regional Farm-to-Port Source Map */}
        {activeTab === 'regional' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Regional SVG Map */}
            <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold text-stone-400">
                  Regional Sourcing & Processing Network (Tamil Nadu & Bay of Bengal)
                </div>
                <div className="flex items-center gap-4 text-[11px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Farm Origin
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Cuddalore HQ
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block" /> Sea Port
                  </span>
                </div>
              </div>

              {/* The Interactive SVG Canvas */}
              <div className="relative aspect-[4/3] w-full bg-stone-900/90 rounded-lg border border-stone-800/80 overflow-hidden flex items-center justify-center p-2">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full select-none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Stylized Coastal Water / Bay of Bengal */}
                  <path
                    d="M 68 0 Q 75 25, 62 42 T 52 82 T 44 100 L 100 100 L 100 0 Z"
                    fill="#0f172a"
                    opacity="0.8"
                  />
                  {/* Subtle Grid Lines */}
                  <line x1="20" y1="0" x2="20" y2="100" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />
                  <line x1="60" y1="0" x2="60" y2="100" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="#262626" strokeWidth="0.2" strokeDasharray="1,2" />

                  {/* Ocean Label */}
                  <text x="82" y="55" fill="#38bdf8" fontSize="2.8" opacity="0.3" textAnchor="middle" letterSpacing="0.2em">
                    BAY OF BENGAL
                  </text>
                  <text x="76" y="94" fill="#38bdf8" fontSize="2.2" opacity="0.25" textAnchor="middle">
                    INDIAN OCEAN
                  </text>

                  {/* Flow connecting lines: Erode/Salem/Dindigul -> Cuddalore HQ */}
                  <path
                    d="M 38 44 Q 50 40, 62 38"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="0.8"
                    strokeDasharray="1.5,1.5"
                    opacity="0.7"
                  />
                  <path
                    d="M 48 36 L 62 38"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="0.8"
                    strokeDasharray="1.5,1.5"
                    opacity="0.7"
                  />
                  <path
                    d="M 42 62 Q 52 50, 62 38"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="0.8"
                    strokeDasharray="1.5,1.5"
                    opacity="0.7"
                  />

                  {/* Flow connecting lines: Cuddalore HQ -> Chennai Port & Tuticorin */}
                  <path
                    d="M 62 38 Q 66 30, 70 22"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1.2"
                    strokeDasharray="2,2"
                  />
                  <path
                    d="M 62 38 Q 58 60, 48 84"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1.2"
                    strokeDasharray="2,2"
                  />

                  {/* Interactive Nodes */}
                  {SUPPLY_NODES.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    const isHQ = node.type === 'processing';
                    const isPort = node.type === 'port';
                    const fillColor = isHQ ? '#fbbf24' : isPort ? '#60a5fa' : '#34d399';

                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer transition-transform hover:scale-125"
                        onClick={() => setSelectedNode(node)}
                      >
                        {/* Outer Glow ring if selected */}
                        {isSelected && (
                          <circle
                            cx={node.coordinates.x}
                            cy={node.coordinates.y}
                            r="4.5"
                            fill="none"
                            stroke={fillColor}
                            strokeWidth="0.6"
                            opacity="0.8"
                          />
                        )}

                        {/* Core Node Marker */}
                        <circle
                          cx={node.coordinates.x}
                          cy={node.coordinates.y}
                          r={isHQ ? 3.2 : 2.5}
                          fill={fillColor}
                          stroke="#171717"
                          strokeWidth="0.6"
                        />

                        {/* Label */}
                        <text
                          x={node.coordinates.x}
                          y={node.coordinates.y - (isHQ ? 4.5 : 3.5)}
                          fill={isSelected ? '#ffffff' : '#d4d4d4'}
                          fontSize={isHQ ? '3.0' : '2.4'}
                          fontWeight={isSelected ? 'bold' : 'normal'}
                          textAnchor="middle"
                          filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))"
                        >
                          {node.name.split(' ')[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Direct Port Distance Indicator */}
                <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-xs text-[11px] text-stone-300 p-2 rounded border border-stone-800">
                  <span className="font-semibold text-white">Cuddalore HQ Corridor:</span> 98 nautical miles to Chennai Port · Direct East Coast Road (ECR)
                </div>
              </div>

              <div className="mt-4 text-xs text-stone-400">
                Click any farm, processing facility, or seaport node on the map to inspect real-time origin specifications and logistics capabilities.
              </div>
            </div>

            {/* Right: Selected Node Details Card */}
            <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {selectedNode.type === 'processing'
                      ? 'Central Manufacturing & Export HQ'
                      : selectedNode.type === 'port'
                      ? 'International Deep Sea Terminal'
                      : 'Certified Agricultural Cluster'}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {selectedNode.name}
                  </h3>
                </div>
                <span className="text-xs font-mono-numbers px-2.5 py-1 bg-stone-800 text-stone-300 rounded">
                  {selectedNode.district}
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 block text-[11px] uppercase">Soil & Elevation Characteristics</span>
                  <strong className="text-white font-medium">{selectedNode.elevationSoil}</strong>
                </div>

                <div>
                  <span className="text-stone-400 block text-[11px] uppercase">Core Facility / Agro Activity</span>
                  <strong className="text-amber-300 font-medium">{selectedNode.keyActivity}</strong>
                </div>

                <div>
                  <span className="text-stone-400 block text-[11px] uppercase">Primary Products Produced / Handled</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedNode.products.map((prod, i) => (
                      <span key={i} className="px-2 py-0.5 bg-stone-800 text-stone-200 rounded text-[11px]">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-stone-300 pt-2 border-t border-stone-800/80">
                  {selectedNode.description}
                </p>
              </div>

              {/* Node Switcher Quick Buttons */}
              <div className="pt-2 border-t border-stone-800 space-y-1.5">
                <span className="text-[11px] text-stone-400 block">Switch Node Focus:</span>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {SUPPLY_NODES.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNode(n)}
                      className={`px-2.5 py-1.5 rounded text-left truncate transition-colors cursor-pointer ${
                        selectedNode.id === n.id
                          ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-700/60 font-semibold'
                          : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'
                      }`}
                    >
                      {n.name.split(' ')[0]} {n.name.split(' ')[1] || ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Global Maritime Shipping Lanes */}
        {activeTab === 'global' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Global Trade Lanes Selector */}
            <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-4">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Direct Container Shipping Lanes from Chennai & Tuticorin
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Global Ocean Transit Corridors
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                We partner with premier global maritime carriers (Maersk, MSC, Hapag-Lloyd, ONE, CMA CGM) to deliver sealed FCL (Full Container Load) and LCL shipments under FOB, CIF, or CFR Incoterms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {GLOBAL_TRADE_LANES.map((lane) => {
                  const isSelected = selectedLane.id === lane.id;
                  return (
                    <div
                      key={lane.id}
                      onClick={() => setSelectedLane(lane)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-600 text-white shadow-md'
                          : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-emerald-400 uppercase">
                          {lane.region}
                        </span>
                        <span className="text-xs font-mono-numbers px-2 py-0.5 bg-stone-800 rounded text-amber-300">
                          {lane.transitDays} Days
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mt-1">
                        {lane.destination}
                      </h4>
                      <div className="text-xs text-stone-400 mt-2 truncate">
                        Ports: {lane.portOfEntry}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Trade Lane Logistics Spec */}
            <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Trade Corridor Compliance
                  </div>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {selectedLane.destination}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-300">
                  <Anchor className="w-4 h-4" />
                  <span className="font-mono-numbers">{selectedLane.activeLines} Ocean Carriers</span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-stone-400 block text-[11px] uppercase">Destination Ocean Ports</span>
                  <strong className="text-white text-sm">{selectedLane.portOfEntry}</strong>
                </div>

                <div className="grid grid-cols-2 gap-3 py-2 border-y border-stone-800">
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase">Sea Transit Duration</span>
                    <strong className="text-amber-300 font-mono-numbers text-base">{selectedLane.transitDays} Days Avg</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase">Standard Incoterm</span>
                    <strong className="text-white text-xs">{selectedLane.preferredIncoterm}</strong>
                  </div>
                </div>

                <div>
                  <span className="text-stone-400 block text-[11px] uppercase mb-1">
                    Customs & Regulatory Protocol Enforced
                  </span>
                  <div className="p-3 bg-stone-900 border border-stone-800 rounded text-stone-300 leading-relaxed">
                    {selectedLane.customsProtocol}
                  </div>
                </div>

                <div className="pt-2 text-stone-400">
                  Includes full documentation: Bill of Lading, Phytosanitary Certificate, Certificate of Origin (Chamber of Commerce), Commercial Invoice, Packing List, and Batch COA.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6-Stage Traceability Timeline */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                End-to-End Operational Integrity
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                6-Stage Farm-to-Port Quality Lifecycle
              </h3>
            </div>
            <span className="text-xs text-stone-400">
              100% ETO-Free & Non-Irradiated Processing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPLY_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 bg-stone-950 border border-stone-800 rounded-xl space-y-3 hover:border-emerald-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-numbers font-bold px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                    Stage {step.step}
                  </span>
                  <span className="text-xs text-stone-400">{step.location}</span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {step.title}
                </h4>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 border-t border-stone-800/80 text-[11px] font-mono-numbers text-amber-300">
                  {step.standard}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Batch Verification / Traceability Simulator */}
        <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Live Batch Traceability Simulator</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                Verify Export Batch Provenance & Lab Data
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-2xl mt-1">
                Every carton, drum, or container leaving S2S Global Exim features an encoded batch tracking ID. Inspect the complete farm-gate and analytical dossier below.
              </p>
            </div>

            {/* Quick Batch Pill Selection */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-400">Quick Samples:</span>
              {Object.keys(TRACEABILITY_SAMPLES).map((code) => (
                <button
                  key={code}
                  onClick={() => handleBatchSearch(code)}
                  className={`text-xs font-mono-numbers px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    batchCodeInput === code
                      ? 'bg-amber-400 text-stone-950 font-bold'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="flex gap-2 max-w-xl">
            <div className="relative flex-1">
              <input
                type="text"
                value={batchCodeInput}
                onChange={(e) => setBatchCodeInput(e.target.value)}
                placeholder="Enter Batch ID (e.g. S2S-MOR-2026-B812)"
                className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 font-mono-numbers"
              />
            </div>
            <button
              onClick={() => handleBatchSearch()}
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Trace Batch</span>
            </button>
          </div>

          {searchError && (
            <div className="text-xs text-rose-400">{searchError}</div>
          )}

          {/* Decoded Traceability Card */}
          {activeBatchResult && (
            <div className="bg-stone-900/90 border border-stone-700/80 rounded-lg p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono-numbers text-amber-300 font-semibold">
                    VERIFIED BATCH: {activeBatchResult.batchNumber}
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {activeBatchResult.product}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>QC Passed & Port Cleared</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono-numbers">
                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-sans">Farm Sourcing Cluster</span>
                  <strong className="text-white">{activeBatchResult.harvestFarm}</strong>
                  <div className="text-[10px] text-stone-500 mt-1">Harvested: {activeBatchResult.harvestDate}</div>
                </div>

                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-sans">Processing & Dehydration</span>
                  <strong className="text-white">{activeBatchResult.processingDate}</strong>
                  <div className="text-[10px] text-stone-500 mt-1">Mesh: {activeBatchResult.meshSize}</div>
                </div>

                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-sans">Active Bioactive & Moisture</span>
                  <strong className="text-emerald-400">{activeBatchResult.curcuminOrBioactive}</strong>
                  <div className="text-[10px] text-stone-500 mt-1">{activeBatchResult.moisture}</div>
                </div>

                <div className="p-3 bg-stone-950 rounded border border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-sans">Maritime Vessel & Port</span>
                  <strong className="text-amber-300">{activeBatchResult.port}</strong>
                  <div className="text-[10px] text-stone-500 mt-1">{activeBatchResult.vessel}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-2.5 bg-stone-950 rounded border border-stone-800 flex items-center justify-between">
                  <span className="text-stone-400">Microbial Analysis:</span>
                  <span className="text-white font-mono-numbers font-medium">{activeBatchResult.microbiology}</span>
                </div>
                <div className="p-2.5 bg-stone-950 rounded border border-stone-800 flex items-center justify-between">
                  <span className="text-stone-400">Heavy Metals ICP-MS:</span>
                  <span className="text-white font-mono-numbers font-medium">{activeBatchResult.heavyMetals}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
