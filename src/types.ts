export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AED' | 'INR';

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  rateFromUSD: number;
  label: string;
}

export type Incoterm = 'FOB Chennai Port' | 'FOB Tuticorin Port' | 'CIF Destination Port' | 'CFR Destination Port' | 'EXW Cuddalore Facility';

export type PackagingType = 
  | '25kg Multi-layer Kraft Paper Bag (Inner Poly Liner)'
  | '50kg HDPE / Fiber Drums (Food Grade)'
  | '500kg / 1000kg Bulk Jumbo PP Bags'
  | 'Private Label OEM Retail Pouches (100g, 250g, 500g, 1kg)';

export interface CertificateItem {
  id: string;
  name: string;
  authority: string;
  validity: string;
  badge: string;
  scope: string;
}

export interface ProductSpec {
  id: string;
  name: string;
  category: 'core-powders' | 'ground-spices' | 'dehydrated-herbs' | 'floral-botanicals';
  botanicalName: string;
  hsCode: string;
  origin: string;
  image: string;
  gallery?: string[];
  shortDescription: string;
  detailedOverview: string;
  sensoryProfile: {
    color: string;
    aroma: string;
    taste: string;
    appearance: string;
  };
  keyParameters: {
    parameter: string;
    specification: string;
    standardMethod: string;
  }[];
  activeBioactives: {
    name: string;
    percentage: string;
    description: string;
  }[];
  meshOptions: string[];
  packagingOptions: string[];
  moqCommercialKg: number;
  moqSampleKg: number;
  shelfLifeMonths: number;
  basePriceUSDPerKg: number; // For wholesale estimation
  leadTimeDays: number;
  coaSample: {
    batchNumber: string;
    testingLab: string;
    date: string;
    parameters: {
      test: string;
      result: string;
      limit: string;
      status: 'Pass';
    }[];
  };
}

export interface SupplyChainNode {
  id: string;
  name: string;
  district: string;
  coordinates: { x: number; y: number }; // For SVG map (0-100% scale)
  type: 'farm' | 'processing' | 'port';
  products: string[];
  elevationSoil: string;
  description: string;
  keyActivity: string;
}

export interface GlobalTradeLane {
  id: string;
  destination: string;
  region: string;
  portOfEntry: string;
  transitDays: number;
  preferredIncoterm: string;
  customsProtocol: string;
  activeLines: number;
}

export interface RFQItem {
  productId: string;
  productName: string;
  meshSize: string;
  packaging: string;
  quantityMetricTons: number;
  isSampleOnly?: boolean;
}

export interface RFQSubmission {
  id: string;
  buyerName: string;
  companyName: string;
  country: string;
  email: string;
  phoneWhatsapp: string;
  destinationPort: string;
  incoterm: Incoterm;
  targetCurrency: CurrencyCode;
  items: RFQItem[];
  containerRequirement: '20ft FCL' | '40ft HC' | 'LCL (Palletized)' | 'Air Express Sample';
  customNotes?: string;
  submittedAt: string;
}
