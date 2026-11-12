import { SupplyChainNode, GlobalTradeLane } from '../types';

export const SUPPLY_NODES: SupplyChainNode[] = [
  {
    id: 'cuddalore-hq',
    name: 'Cuddalore Central Facility & HQ',
    district: 'Cuddalore District, Tamil Nadu',
    coordinates: { x: 62, y: 38 }, // Tamil Nadu regional SVG coordinate %
    type: 'processing',
    products: ['Moringa Powder', 'Onion Powder', 'Garlic Powder', 'Custom Export Blends'],
    elevationSoil: 'Coastal Alluvial Loam · Microclimate 31°C avg',
    description: 'Our primary manufacturing and export processing headquarters. Houses temperature-monitored dehydration tunnels, stainless steel cryogenic micro-mills, cleanroom packaging lines, and export aggregation yards.',
    keyActivity: 'Primary Processing, Quality QC, Nitrogen Packing & Container Stuffing',
  },
  {
    id: 'erode-turmeric',
    name: 'Erode Turmeric Agro Belt',
    district: 'Erode District, Tamil Nadu',
    coordinates: { x: 38, y: 44 },
    type: 'farm',
    products: ['High-Curcumin Turmeric Finger'],
    elevationSoil: 'Black Cotton & Red Sandy Clay · 183m elevation',
    description: 'Renowned as the "Yellow City" of India. Direct farmer collective partnerships spanning 400+ acres producing GI-tagged high-curcumin turmeric rhizomes, cured naturally without synthetic dyes.',
    keyActivity: 'Direct Farm Harvest, Traditional Steaming, Sun-Drying & Finger Polishing',
  },
  {
    id: 'dindigul-moringa',
    name: 'Dindigul & Theni Moringa Groves',
    district: 'Dindigul District, Tamil Nadu',
    coordinates: { x: 42, y: 62 },
    type: 'farm',
    products: ['Certified Organic Moringa Oleifera Leaves'],
    elevationSoil: 'Semi-Arid Western Ghats Foothills · Deep Red Soil',
    description: 'Certified organic Moringa Oleifera cultivation benefiting from year-round sunshine and low humidity, giving our drumstick leaves exceptional chlorophyll concentration and intense green pigment.',
    keyActivity: 'Morning Hand-Plucking, Cold Flume Leaf Washing & Shade Drying',
  },
  {
    id: 'salem-spices',
    name: 'Salem Spices & Aggregation Hub',
    district: 'Salem District, Tamil Nadu',
    coordinates: { x: 48, y: 36 },
    type: 'farm',
    products: ['Salem Variety Curcuma Longa', 'Garlic Bulbs'],
    elevationSoil: 'Shevaroy Hills Foothills · Mineral Rich Soil',
    description: 'Traditional agro-trading and specialized spice curing yards where mature roots undergo density grading, electronic moisture verification, and lot numbering before transfer to Cuddalore.',
    keyActivity: 'Electronic Sorting, Moisture Calibration & Batch Tagging',
  },
  {
    id: 'chennai-port',
    name: 'Chennai Container Terminal (CCTL)',
    district: 'Chennai, Tamil Nadu (98km North)',
    coordinates: { x: 70, y: 22 },
    type: 'port',
    products: ['All FCL & LCL Container Shipments', 'Air Cargo via MAA'],
    elevationSoil: 'Deep Sea Container Port · 15.5m draft',
    description: 'Major international maritime hub connecting South India to Europe, North America, Middle East, and East Asia. S2S Global Exim holds dedicated fast-track customs clearance at Chennai port.',
    keyActivity: 'Customs Phytosanitary Clearances, Reefer/Dry Container Stuffing & Vessel Loading',
  },
  {
    id: 'tuticorin-port',
    name: 'V.O. Chidambaranar Port (Tuticorin)',
    district: 'Thoothukudi, Tamil Nadu',
    coordinates: { x: 48, y: 84 },
    type: 'port',
    products: ['Direct Mainline Bulk Container Cargo'],
    elevationSoil: 'All-Weather Port · Gulf of Mannar',
    description: 'Strategically positioned on the east-west international shipping lane, ideal for swift maritime transit to Colombo transshipment, Europe, and the Mediterranean.',
    keyActivity: 'Direct Ocean Freight Dispatch, Port Health Authority Bill of Lading Issuance',
  },
];

export const SUPPLY_STEPS = [
  {
    step: '01',
    title: 'Farm-Gate Harvest & Direct Procurement',
    location: 'Cuddalore, Erode & Dindigul Fields',
    description: 'We procure 100% directly from contracted farmer cooperatives, cutting out intermediaries. Every batch is geotagged with harvest date and farm lot identification.',
    standard: 'Zero Middlemen · Fair Trade Pricing · Lot Traceability',
  },
  {
    step: '02',
    title: 'Cold Wash & Dehumidified Low-Temp Dehydration',
    location: 'Cuddalore Processing Facility',
    description: 'Raw leaves, bulbs, and roots are triple-washed in chilled filtered flumes and dried below 42°C–45°C to protect delicate bioactives, allicin, volatile oils, and emerald chlorophyll.',
    standard: 'Enzyme Retention · <6.0% Moisture Threshold · Solar-Hybrid',
  },
  {
    step: '03',
    title: 'Cryogenic Milling & Micro-Mesh Sieving',
    location: 'Cleanroom Pulverization Suite',
    description: 'Low-temperature stainless steel pulverizers eliminate frictional heat degradation. Multi-deck vibrating sieves calibrate powders precisely to 80, 100, or 120 mesh.',
    standard: 'Non-Thermal Milled · High Solubility · Uniform Granulometry',
  },
  {
    step: '04',
    title: 'Steam Pasteurization & Ferrous Decontamination',
    location: 'Sterilization & Magnetic Trapping',
    description: 'We enforce 100% ETO-free (Ethylene Oxide Free) and non-irradiated microbial control via dry steam flash sterilization, backed by rare-earth 12,000 Gauss magnetic separation.',
    standard: 'ETO-Free · Non-Irradiated · Zero Metal Particulates',
  },
  {
    step: '05',
    title: 'Certified NABL / Eurofins Lab Verification',
    location: 'Accredited Analytical Labs, Chennai',
    description: 'Every production lot is subjected to HPLC active ingredient profiling, ICP-MS heavy metals testing (Pb, Cd, As, Hg), 520+ pesticide residue screening, and pathogen analysis.',
    standard: 'Official COA Issued · US-FDA & EU Reg Compliant',
  },
  {
    step: '06',
    title: 'Nitrogen-Purged Packing & Port Dispatch',
    location: 'Chennai Sea Port & Tuticorin Port',
    description: 'Packed into food-grade moisture barrier multi-ply kraft bags with hermetic heat sealing and nitrogen flush. Direct container drayage to port terminals with seal GPS tracking.',
    standard: 'FCL & LCL Ready · Reefer/Dry Containers · Direct Ocean B/L',
  },
];

export const GLOBAL_TRADE_LANES: GlobalTradeLane[] = [
  {
    id: 'north-america',
    destination: 'United States & Canada',
    region: 'North America',
    portOfEntry: 'Port of New York / Newark & Port of Long Beach (LA)',
    transitDays: 24,
    preferredIncoterm: 'CIF New York / CIF Los Angeles / FOB Chennai',
    customsProtocol: 'US FDA Prior Notice, Phytosanitary Certificate, Certificate of Origin, ASTA Testing',
    activeLines: 4,
  },
  {
    id: 'europe',
    destination: 'European Union & United Kingdom',
    region: 'Europe',
    portOfEntry: 'Port of Rotterdam (NL), Port of Hamburg (DE), Felixstowe (UK)',
    transitDays: 20,
    preferredIncoterm: 'CIF Rotterdam / CIF Hamburg / FOB Chennai',
    customsProtocol: 'EU Reg 2023/915 Contaminant Limits, TRACES NT, Eurofins COA, ETO-Free Declaration',
    activeLines: 6,
  },
  {
    id: 'middle-east',
    destination: 'UAE, Saudi Arabia & GCC Nations',
    region: 'Middle East',
    portOfEntry: 'Jebel Ali Port (Dubai), Dammam & Jeddah (KSA)',
    transitDays: 5,
    preferredIncoterm: 'CIF Jebel Ali / CFR Dammam / FOB Tuticorin',
    customsProtocol: 'Halal Certification, GCC Standardization Organization (GSO) Food Rules, Chamber legalized docs',
    activeLines: 8,
  },
  {
    id: 'asia-pacific',
    destination: 'Singapore, Japan, Australia & ASEAN',
    region: 'Asia Pacific',
    portOfEntry: 'Port of Singapore, Yokohama (Tokyo), Port of Melbourne',
    transitDays: 10,
    preferredIncoterm: 'CIF Singapore / CIF Yokohama / FOB Chennai',
    customsProtocol: 'SFA Singapore Import Permit, Japan MHLW Food Sanitation Law, DAFF Biosecurity Australia',
    activeLines: 5,
  },
];

export const TRACEABILITY_SAMPLES: Record<string, {
  batchNumber: string;
  product: string;
  harvestFarm: string;
  harvestDate: string;
  processingDate: string;
  meshSize: string;
  curcuminOrBioactive: string;
  moisture: string;
  heavyMetals: string;
  microbiology: string;
  packagingDate: string;
  destination: string;
  port: string;
  vessel: string;
}> = {
  'S2S-MOR-2026-B812': {
    batchNumber: 'S2S-MOR-2026-B812',
    product: 'Organic Moringa Oleifera Leaf Powder',
    harvestFarm: 'Cuddalore Coastal Organic Cooperative Cluster #4',
    harvestDate: '2026-03-12',
    processingDate: '2026-03-15 (Low-Temp Dehumidified)',
    meshSize: '100 Mesh Fine (99.4% pass)',
    curcuminOrBioactive: 'Chlorophyll: 1,220 mg/100g · Protein: 28.1%',
    moisture: '5.2% (Standard: Max 7.0%)',
    heavyMetals: 'Pb < 0.05 ppm, Cd < 0.02 ppm, As < 0.04 ppm (Pass EU MRL)',
    microbiology: 'Salmonella: Absent/25g, E.coli: Negative, TPC < 8,000 CFU/g',
    packagingDate: '2026-03-18 (25kg Multi-Ply Kraft Bags + Poly Liner)',
    destination: 'Rotterdam Gateway, Netherlands',
    port: 'Chennai Port (CCTL)',
    vessel: 'MSC BERYL Voy 2614W',
  },
  'S2S-TUR-2026-C409': {
    batchNumber: 'S2S-TUR-2026-C409',
    product: 'High-Curcumin Turmeric Finger Powder',
    harvestFarm: 'Erode Agricultural Syndicate Farm #18 (Salem Cultivar)',
    harvestDate: '2026-03-08',
    processingDate: '2026-03-14 (Low-Temperature Hammer Milled)',
    meshSize: '80 Mesh Uniform Seasoning Grade',
    curcuminOrBioactive: 'Curcuminoid Content: 4.82% (HPLC certified)',
    moisture: '7.8% (Standard: Max 9.0%)',
    heavyMetals: 'Zero Lead Chromate · Pb 0.12 ppm (Pass ASTA/FDA)',
    microbiology: 'Steam Sterilized · TPC < 12,000 CFU/g · Mold < 50 CFU/g',
    packagingDate: '2026-03-19 (50kg Food Grade Fiber Drums)',
    destination: 'Port of Newark / New York, USA',
    port: 'Chennai Port Terminal',
    vessel: 'MAERSK KALAMATA Voy 2603',
  },
  'S2S-ONI-2026-D114': {
    batchNumber: 'S2S-ONI-2026-D114',
    product: 'Dehydrated White Onion Powder',
    harvestFarm: 'Cuddalore Controlled Agrarian Contract Zone #9',
    harvestDate: '2026-03-05',
    processingDate: '2026-03-10 (Continuous Low-Heat Tunnel Dehydration)',
    meshSize: '80 Mesh Free-Flowing',
    curcuminOrBioactive: 'Pyruvic Acid (Pungency): 17.8 μmol/g',
    moisture: '4.4% (Standard: Max 5.0%)',
    heavyMetals: 'Zero Anti-caking additives · 100% Pure Allium Solids',
    microbiology: 'Coliforms < 10 CFU/g · Salmonella Absent',
    packagingDate: '2026-03-16 (25kg Kraft Bags + Hermetic Seal)',
    destination: 'Jebel Ali Port, Dubai, UAE',
    port: 'VOC Port Tuticorin',
    vessel: 'HAPAG-LLOYD ME3 Service',
  },
  'S2S-GAR-2026-A290': {
    batchNumber: 'S2S-GAR-2026-A290',
    product: 'Pure Dehydrated Garlic Powder (Allicin-Rich)',
    harvestFarm: 'Tamil Nadu Hill Agrarian Cooperative #12',
    harvestDate: '2026-03-02',
    processingDate: '2026-03-08 (Cold-Cracked & Cryo-Ground)',
    meshSize: '100 Mesh Ultra-Soluble',
    curcuminOrBioactive: 'Allicin Yield: 4,890 μg/g (High bioactive potency)',
    moisture: '5.1% (Standard: Max 6.0%)',
    heavyMetals: 'Zero Starch Adulteration · Pure Garlic Essence',
    microbiology: 'TPC: 8,200 CFU/g · Salmonella Absent/25g',
    packagingDate: '2026-03-14 (25kg Kraft with Food PE Liner)',
    destination: 'Port of Singapore',
    port: 'Chennai Port Terminal',
    vessel: 'ONE CONTINUITY Voy 052E',
  },
};
