export type LanguageCode = 'en' | 'es' | 'fr' | 'ar' | 'de';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
];

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navbar
    'nav.products': 'Products & Specs',
    'nav.supplyChain': 'Supply Chain Map',
    'nav.b2bPortal': 'B2B Order Portal',
    'nav.certifications': 'Certifications',
    'nav.about': 'About & Origin',
    'nav.contact': 'Contact',
    'nav.requestRFQ': 'Request RFQ / Sample',
    'nav.merchandiseExporter': 'Merchandise Exporter',

    // Hero
    'hero.badge': 'Certified Agro Export House · Tamil Nadu',
    'hero.origin': 'Cuddalore, Tamil Nadu, India',
    'hero.headline': 'Global Merchandise Exporter for Pure Botanical Powders & Spices',
    'hero.subhead': 'Supplying international food blenders, tea packers, and nutraceutical brands directly from manufacturer to buyer and end user.',
    'hero.ctaPortal': 'Launch B2B RFQ Portal',
    'hero.ctaWhatsapp': 'WhatsApp: +91 9894660672',
    'hero.ctaCatalog': 'Browse Full 25+ Catalog',
    'hero.corpOffice': 'Corporate Office Address',
    'hero.proof1': 'Exclusively Merchandise Exporter',
    'hero.proof2': 'Direct Manufacturer to Buyer',
    'hero.proof3': 'NABL & Eurofins Certified COA',
    'hero.proof4': 'Chennai & Tuticorin Seaports',

    // Products
    'prod.title': 'Export-Grade Botanical Powders, Ground Spices & Dehydrated Herbs',
    'prod.subtitle': 'Dehydrated under strict thermal thresholds to guarantee high bioactive retention, uniform particle mesh, and complete compliance with US-FDA and European Union statutory import limits.',
    'prod.catAll': 'All Products',
    'prod.catCore': 'Core Flagship Powders',
    'prod.catSpices': 'Ground Spices & Seeds',
    'prod.catHerbs': 'Dehydrated Leaves & Herbs',
    'prod.catFloral': 'Floral & Botanicals',
    'prod.spicesSheet': 'Spices Master Sheet',
    'prod.herbalSheet': 'Herbal Master Sheet',
    'prod.benchmark': 'Wholesale Benchmark',
    'prod.moq': 'Standard MOQ',
    'prod.addRFQ': 'Add RFQ',
    'prod.fullSpecs': 'Full Specs & COA',
    'prod.downloadCOA': 'Download Certified COA (PDF)',
    'prod.requestSample': 'Request 2kg Lab Sample Kit',

    // B2B Order Portal
    'portal.title': 'Commercial RFQ & Container Load Configurator',
    'portal.subtitle': 'Configure FCL (20ft / 40ft) or LCL mixed consignments of Moringa, Turmeric, Onion, Garlic, and ground spices. Instant proforma estimates.',
    'portal.step1': 'Step 1: Container Cargo Allocation',
    'portal.step2': 'Step 2: Selected Agro Powders & Packaging Specifications',
    'portal.step3': 'Step 3: Incoterms & Maritime Destination',
    'portal.step4': 'Step 4: Importer Verification Details',
    'portal.addPowder': 'Add Commodity',
    'portal.loadGauge': 'Container Load Gauge',
    'portal.totalCargo': 'Total Cargo Volume',
    'portal.proformaTotal': 'Total Proforma Quote',
    'portal.submitRFQ': 'Submit RFQ & Generate Proforma',
    'portal.sampleCheckbox': 'Include 2kg Certified Laboratory Sample Kit',
    'portal.incotermsLabel': 'International Commercial Terms (Incoterms 2020)',
    'portal.targetPort': 'Target Discharge Port & Country',

    // Supply Chain Map
    'map.title': 'Interactive Farm-Gate to Global Port Map',
    'map.subtitle': 'Every kilogram exported by S2S Global Exim originates from verified farm cooperatives across Tamil Nadu. Explore our processing corridor and international shipping lanes.',
    'map.tabRegional': 'Tamil Nadu Farm-to-Port',
    'map.tabGlobal': 'Global Ocean Trade Lanes',
    'map.batchLookup': 'Verify Export Batch Provenance & Lab Data',
    'map.traceButton': 'Trace Batch',

    // Certifications
    'cert.title': 'Export Licenses, Certifications & Safety Dossiers',
    'cert.subtitle': 'S2S Global Exim operates in full legal alignment with statutory export standards established by APEDA, Spices Board India, FSSAI, US-FDA, and European Commission food safety directives.',
    'cert.download': 'Download All Quality Certificates',

    // About
    'about.title': 'Rooted in Cuddalore, Tamil Nadu · Connected to Global Ports',
    'about.subtitle': 'S2S Global Exim operates strictly as a specialized Merchandise Exporter connecting certified Tamil Nadu agro manufacturers and farm cooperatives directly to global buyers and end users.',

    // Contact
    'contact.title': 'Connect with S2S Global Exim',
    'contact.subtitle': 'Our trade specialists in Cuddalore handle inquiries for international importers, distributors, and blenders across all time zones.',
    'contact.corporateOffice': 'Corporate Office:',
    'contact.address': '113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, India.',
    'contact.sendInquiry': 'Send Direct Export Inquiry',
    'contact.submitButton': 'Transmit Inquiry to Cuddalore Export Office',
  },

  es: {
    // Navbar
    'nav.products': 'Productos y Fichas',
    'nav.supplyChain': 'Mapa de Cadena de Suministro',
    'nav.b2bPortal': 'Portal de Pedidos B2B',
    'nav.certifications': 'Certificaciones',
    'nav.about': 'Nosotros y Origen',
    'nav.contact': 'Contacto',
    'nav.requestRFQ': 'Cotización / Muestras',
    'nav.merchandiseExporter': 'Exportador de Mercancías',

    // Hero
    'hero.badge': 'Casa Exportadora Agro Certificada · Tamil Nadu',
    'hero.origin': 'Cuddalore, Tamil Nadu, India',
    'hero.headline': 'Exportador de Mercancías para Polvos Botánicos y Especias Puras',
    'hero.subhead': 'Abastecemos a mezcladores de alimentos, envasadores de té y marcas nutracéuticas internacionales directamente del fabricante al comprador final.',
    'hero.ctaPortal': 'Abrir Portal RFQ B2B',
    'hero.ctaWhatsapp': 'WhatsApp: +91 9894660672',
    'hero.ctaCatalog': 'Ver Catálogo de 25+ Productos',
    'hero.corpOffice': 'Dirección de la Sede Corporativa',
    'hero.proof1': 'Exclusivamente Exportador de Mercancías',
    'hero.proof2': 'Directo del Fabricante al Comprador',
    'hero.proof3': 'Certificados COA NABL y Eurofins',
    'hero.proof4': 'Puertos Marítimos de Chennai y Tuticorin',

    // Products
    'prod.title': 'Polvos Botánicos, Especias Molidas y Hierbas Deshidratadas de Grado Exportación',
    'prod.subtitle': 'Deshidratados bajo estrictos límites térmicos para garantizar alta retención bioactiva, granulometría uniforme y cumplimiento total con la US-FDA y la Unión Europea.',
    'prod.catAll': 'Todos los Productos',
    'prod.catCore': 'Polvos Principales',
    'prod.catSpices': 'Especias y Semillas',
    'prod.catHerbs': 'Hojas y Hierbas Deshidratadas',
    'prod.catFloral': 'Flores y Botánicos',
    'prod.spicesSheet': 'Hoja Maestra de Especias',
    'prod.herbalSheet': 'Hoja Maestra de Hierbas',
    'prod.benchmark': 'Precio Mayorista Referencial',
    'prod.moq': 'Pedido Mínimo (MOQ)',
    'prod.addRFQ': 'Añadir a RFQ',
    'prod.fullSpecs': 'Ficha Técnica y COA',
    'prod.downloadCOA': 'Descargar COA Certificado (PDF)',
    'prod.requestSample': 'Solicitar Kit de Muestra 2kg',

    // B2B Order Portal
    'portal.title': 'Cotizador Comercial RFQ y Calculador de Contenedores',
    'portal.subtitle': 'Configure envíos FCL (20 pies / 40 pies) o LCL combinados de Moringa, Cúrcuma, Cebolla, Ajo y especias. Estimaciones proforma instantáneas.',
    'portal.step1': 'Paso 1: Asignación de Contenedor Marítimo',
    'portal.step2': 'Paso 2: Polvos Agro y Especificaciones de Envasado',
    'portal.step3': 'Paso 3: Incoterms y Puerto de Destino',
    'portal.step4': 'Paso 4: Datos del Importador',
    'portal.addPowder': 'Añadir Producto',
    'portal.loadGauge': 'Indicador de Carga del Contenedor',
    'portal.totalCargo': 'Volumen Total de Carga',
    'portal.proformaTotal': 'Cotización Proforma Total',
    'portal.submitRFQ': 'Enviar RFQ y Generar Proforma',
    'portal.sampleCheckbox': 'Incluir Kit de Muestra de Laboratorio de 2kg',
    'portal.incotermsLabel': 'Términos Comerciales Internacionales (Incoterms 2020)',
    'portal.targetPort': 'Puerto de Descarga y País de Destino',

    // Supply Chain Map
    'map.title': 'Mapa Interactivo del Campo al Puerto Global',
    'map.subtitle': 'Cada kilogramo exportado por S2S Global Exim proviene de cooperativas agrícolas verificadas en Tamil Nadu. Explore el corredor y las rutas marítimas.',
    'map.tabRegional': 'Campo a Puerto (Tamil Nadu)',
    'map.tabGlobal': 'Rutas Marítimas Globales',
    'map.batchLookup': 'Verificar Trazabilidad de Lote y Datos de Laboratorio',
    'map.traceButton': 'Rastrear Lote',

    // Certifications
    'cert.title': 'Licencias de Exportación, Certificaciones y Seguridad',
    'cert.subtitle': 'S2S Global Exim opera en estricta conformidad con APEDA, Spices Board India, FSSAI, US-FDA y directivas de seguridad alimentaria de la Comisión Europea.',
    'cert.download': 'Descargar Todos los Certificados',

    // About
    'about.title': 'Arraigados en Cuddalore, Tamil Nadu · Conectados con Puertos del Mundo',
    'about.subtitle': 'S2S Global Exim opera estrictamente como Exportador de Mercancías, conectando fabricantes y cooperativas agrícolas directamente con compradores internacionales.',

    // Contact
    'contact.title': 'Contacte a S2S Global Exim',
    'contact.subtitle': 'Nuestros especialistas de comercio exterior en Cuddalore atienden consultas de importadores, distribuidores y fabricantes en todos los husos horarios.',
    'contact.corporateOffice': 'Sede Corporativa:',
    'contact.address': '113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, India.',
    'contact.sendInquiry': 'Enviar Consulta Directa de Exportación',
    'contact.submitButton': 'Transmitir Consulta a la Oficina de Exportación',
  },

  fr: {
    // Navbar
    'nav.products': 'Produits & Fiches',
    'nav.supplyChain': 'Chaîne Logistique',
    'nav.b2bPortal': 'Portail B2B',
    'nav.certifications': 'Certifications',
    'nav.about': 'À Propos & Origine',
    'nav.contact': 'Contact',
    'nav.requestRFQ': 'Devis / Échantillon',
    'nav.merchandiseExporter': 'Exportateur de Marchandises',

    // Hero
    'hero.badge': 'Maison d’Exportation Agro Certifiée · Tamil Nadu',
    'hero.origin': 'Cuddalore, Tamil Nadu, Inde',
    'hero.headline': 'Exportateur de Marchandises pour Poudres Botaniques & Épices Pures',
    'hero.subhead': 'Fournisseur direct pour industriels agroalimentaires, marques de thé et compléments alimentaires du fabricant à l’acheteur final.',
    'hero.ctaPortal': 'Lancer le Portail B2B',
    'hero.ctaWhatsapp': 'WhatsApp: +91 9894660672',
    'hero.ctaCatalog': 'Catalogue Complet 25+ Produits',
    'hero.corpOffice': 'Siège Social Corporatif',
    'hero.proof1': 'Exclusivement Exportateur de Marchandises',
    'hero.proof2': 'Direct Fabricant vers Acheteur',
    'hero.proof3': 'Certificats COA NABL & Eurofins',
    'hero.proof4': 'Ports de Chennai & Tuticorin',

    // Products
    'prod.title': 'Poudres Botaniques, Épices Moulues & Herbes Déshydratées Qualité Export',
    'prod.subtitle': 'Déshydratation à basse température garantissant la préservation des principes actifs, granulométrie fine et conformité US-FDA / Union Européenne.',
    'prod.catAll': 'Tous les Produits',
    'prod.catCore': 'Poudres Clés',
    'prod.catSpices': 'Épices & Graines',
    'prod.catHerbs': 'Feuilles & Herbes Séchées',
    'prod.catFloral': 'Fleurs & Botaniques',
    'prod.spicesSheet': 'Fiche Maître Épices',
    'prod.herbalSheet': 'Fiche Maître Herbes',
    'prod.benchmark': 'Prix Indicatif de Gros',
    'prod.moq': 'Quantité Minimale (MOQ)',
    'prod.addRFQ': 'Ajouter au Devis',
    'prod.fullSpecs': 'Fiche Technique & COA',
    'prod.downloadCOA': 'Télécharger le COA Certifié (PDF)',
    'prod.requestSample': 'Demander un Échantillon 2kg',

    // B2B Order Portal
    'portal.title': 'Calculateur de Conteneur & Devis Commercial B2B',
    'portal.subtitle': 'Configurez vos expéditions maritimes FCL (20ft / 40ft) ou LCL en Moringa, Curcuma, Oignon, Ail et épices. Facture proforma immédiate.',
    'portal.step1': 'Étape 1: Allocation du Conteneur Maritime',
    'portal.step2': 'Étape 2: Poudres Sélectionnées & Emballage',
    'portal.step3': 'Étape 3: Incoterms & Port de Déchargement',
    'portal.step4': 'Étape 4: Coordonnées de l’Importateur',
    'portal.addPowder': 'Ajouter un Produit',
    'portal.loadGauge': 'Jauge de Chargement du Conteneur',
    'portal.totalCargo': 'Volume Total de la Cargaison',
    'portal.proformaTotal': 'Estimation Proforma Totale',
    'portal.submitRFQ': 'Soumettre le Devis & Proforma',
    'portal.sampleCheckbox': 'Inclure un Kit Échantillon Laboratoire 2kg',
    'portal.incotermsLabel': 'Conditions Commerciales Internationales (Incoterms 2020)',
    'portal.targetPort': 'Port et Pays de Destination',

    // Supply Chain Map
    'map.title': 'Carte Interactive du Champ au Port International',
    'map.subtitle': 'Chaque kilogramme exporté par S2S Global Exim provient de coopératives agricoles vérifiées du Tamil Nadu. Explorez les corridors maritimes.',
    'map.tabRegional': 'Des Champs aux Ports (Tamil Nadu)',
    'map.tabGlobal': 'Lignes Maritimes Mondiales',
    'map.batchLookup': 'Vérifier la Traçabilité du Lot & Données Labo',
    'map.traceButton': 'Tracer le Lot',

    // Certifications
    'cert.title': 'Agréments d’Exportation, Certifications & Normes de Sécurité',
    'cert.subtitle': 'Conformité rigoureuse avec APEDA, Spices Board India, FSSAI, US-FDA et règlements sanitaires de l’Union Européenne.',
    'cert.download': 'Télécharger les Certificats',

    // About
    'about.title': 'Enraciné à Cuddalore, Tamil Nadu · Connecté aux Ports Mondiaux',
    'about.subtitle': 'S2S Global Exim agit strictement comme Exportateur de Marchandises, reliant producteurs et coopératives aux acheteurs internationaux.',

    // Contact
    'contact.title': 'Contacter S2S Global Exim',
    'contact.subtitle': 'Nos spécialistes de l’exportation à Cuddalore répondent aux importateurs, négociants et transformateurs à travers tous les fuseaux horaires.',
    'contact.corporateOffice': 'Siège Social Corporatif:',
    'contact.address': '113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, Inde.',
    'contact.sendInquiry': 'Envoyer une Demande Directe',
    'contact.submitButton': 'Transmettre la Demande au Bureau Export',
  },

  ar: {
    // Navbar
    'nav.products': 'المنتجات والمواصفات',
    'nav.supplyChain': 'خريطة سلاسل الإمداد',
    'nav.b2bPortal': 'بوابة طلبات B2B',
    'nav.certifications': 'الشهادات والاعتمادات',
    'nav.about': 'نبذة عنا والمصدر',
    'nav.contact': 'اتصل بنا',
    'nav.requestRFQ': 'طلب عرض أسعار / عينات',
    'nav.merchandiseExporter': 'مصدّر بضائع تجارية',

    // Hero
    'hero.badge': 'بيت تصدير زراعي معتمد · تاميل نادو',
    'hero.origin': 'كودالور، تاميل نادو، الهند',
    'hero.headline': 'مصدّر بضائع عالمي للمساحيق النباتية النقية والتوابل',
    'hero.subhead': 'توريد مباشر لمصنعي الأغذية ومصانع الشاي والمكملات الغذائية من المزارع والمصانع إلى المشتري النهائي في كافة أنحاء العالم.',
    'hero.ctaPortal': 'فتح بوابة طلبات B2B',
    'hero.ctaWhatsapp': 'واتساب: 9894660672 91+',
    'hero.ctaCatalog': 'استعراض الكتالوج الكامل (25+ منتج)',
    'hero.corpOffice': 'عنوان المقر الرئيسي للشركة',
    'hero.proof1': 'مصدّر بضائع تجارية حصراً',
    'hero.proof2': 'من المصنع مباشرة إلى المشتري',
    'hero.proof3': 'شهادات تحليل مخبري NABL وEurofins',
    'hero.proof4': 'موانئ تشيناي وتوتيكورين البحرية',

    // Products
    'prod.title': 'مساحيق نباتية وتوابل مطحونة وأعشاب مجففة بدرجة تصدير عالمية',
    'prod.subtitle': 'تجفيف منخفض الحرارة يضمن الحفاظ على المركبات الفعالة ونعومة الحبيبات ومطابقة معايير هيئة الغذاء والدواء الأمريكية والاتحاد الأوروبي.',
    'prod.catAll': 'جميع المنتجات',
    'prod.catCore': 'المساحيق الرئيسية',
    'prod.catSpices': 'توابل وبذور مطحونة',
    'prod.catHerbs': 'أوراق وأعشاب مجففة',
    'prod.catFloral': 'زهور ونباتات عطرية',
    'prod.spicesSheet': 'قائمة التوابل الشاملة',
    'prod.herbalSheet': 'قائمة الأعشاب الشاملة',
    'prod.benchmark': 'سعر الجملة الاسترشادي',
    'prod.moq': 'الحد الأدنى للطلب (MOQ)',
    'prod.addRFQ': 'إضافة لعرض السعر',
    'prod.fullSpecs': 'المواصفات الكاملة وCOA',
    'prod.downloadCOA': 'تحميل شهادة التحليل (PDF)',
    'prod.requestSample': 'طلب عينة فحص 2 كجم',

    // B2B Order Portal
    'portal.title': 'حاسبة حمولة الحاويات وطلب عروض الأسعار التجارية',
    'portal.subtitle': 'تخصيص شحنات حاويات كاملة (20 قدم / 40 قدم) أو شحنات مجزأة LCL للمورينجا، الكركم، البصل، الثوم والتوابل مع عروض فورية.',
    'portal.step1': 'الخطوة 1: تخصيص سعة الحاوية البحرية',
    'portal.step2': 'الخطوة 2: المنتجات والمواصفات والتعبئة',
    'portal.step3': 'الخطوة 3: شروط التجارة الدولية والميناء',
    'portal.step4': 'الخطوة 4: بيانات المستورد التجارية',
    'portal.addPowder': 'إضافة منتج',
    'portal.loadGauge': 'مؤشر حمولة الحاوية',
    'portal.totalCargo': 'إجمالي حمولة الشحنة',
    'portal.proformaTotal': 'إجمالي الفاتورة المبدئية',
    'portal.submitRFQ': 'إرسال الطلب وإصدار الفاتورة المبدئية',
    'portal.sampleCheckbox': 'تضمين حقيبة عينات مخبرية فحص 2 كجم',
    'portal.incotermsLabel': 'شروط الشحن الدولية (Incoterms 2020)',
    'portal.targetPort': 'ميناء الوصول والدولة',

    // Supply Chain Map
    'map.title': 'خريطة تفاعلية لتتبع سلاسل الإمداد من المزارع إلى الموانئ',
    'map.subtitle': 'كل كيلوغرام تصدّره إس 2 إس جلوبال إكسم مصدره تعاونيات زراعية موثقة في تاميل نادو عبر خطوط الشحن العالمية.',
    'map.tabRegional': 'من المزارع إلى الموانئ (تاميل نادو)',
    'map.tabGlobal': 'خطوط الملاحة البحرية العالمية',
    'map.batchLookup': 'تتبع أصل الشحنة وشهادة الفحص المخبري',
    'map.traceButton': 'تتبع الشحنة',

    // Certifications
    'cert.title': 'تراخيص التصدير والشهادات ومعايير الجودة الدولية',
    'cert.subtitle': 'التزام صارم بمعايير APEDA ومجلس التوابل الهندي وFSSAI وهيئة الغذاء والدواء الأمريكية وشهادات الحلال.',
    'cert.download': 'تحميل جميع شهادات الجودة',

    // About
    'about.title': 'في كودالور، تاميل نادو · موصولة بموانئ العالم',
    'about.subtitle': 'تعمل شركة S2S Global Exim كـ مصدّر بضائع تجارية متخصص يربط المزارع والمصانع المعتمدة مباشرة بالمستوردين في العالم.',

    // Contact
    'contact.title': 'تواصل مع مكتب التصدير الدولي',
    'contact.subtitle': 'فريقنا في كودالور يتابع استفسارات المستوردين والشركات الغذائية في كافة المناطق الزمنية على مدار الساعة.',
    'contact.corporateOffice': 'المقر الرئيسي للشركة:',
    'contact.address': '113 كاماراج ناجار، فانيار بالايام، كودالور، تاميل نادو، الهند.',
    'contact.sendInquiry': 'إرسال استفسار تجاري مباشر',
    'contact.submitButton': 'إرسال الاستفسار إلى مكتب التصدير',
  },

  de: {
    // Navbar
    'nav.products': 'Produkte & Spezifikationen',
    'nav.supplyChain': 'Lieferketten-Karte',
    'nav.b2bPortal': 'B2B-Bestellportal',
    'nav.certifications': 'Zertifizierungen',
    'nav.about': 'Über uns & Herkunft',
    'nav.contact': 'Kontakt',
    'nav.requestRFQ': 'Angebot / Muster anfordern',
    'nav.merchandiseExporter': 'Warenexporteur',

    // Hero
    'hero.badge': 'Zertifiziertes Agrarexporthaus · Tamil Nadu',
    'hero.origin': 'Cuddalore, Tamil Nadu, Indien',
    'hero.headline': 'Globaler Warenexporteur für reine botanische Pulver & Gewürze',
    'hero.subhead': 'Direkte Belieferung internationaler Lebensmittelhersteller, Teeverpacker und Nutrazeutika-Marken direkt vom Erzeuger zum Käufer.',
    'hero.ctaPortal': 'B2B-Angebotsportal starten',
    'hero.ctaWhatsapp': 'WhatsApp: +91 9894660672',
    'hero.ctaCatalog': 'Gesamten 25+ Katalog ansehen',
    'hero.corpOffice': 'Adresse des Unternehmenssitzes',
    'hero.proof1': 'Ausschließlich Warenexporteur',
    'hero.proof2': 'Direkt vom Erzeuger zum Käufer',
    'hero.proof3': 'NABL- & Eurofins-geprüfte COAs',
    'hero.proof4': 'Seehäfen Chennai & Tuticorin',

    // Products
    'prod.title': 'Botanische Pulver, gemahlene Gewürze & getrocknete Kräuter in Exportqualität',
    'prod.subtitle': 'Schonend getrocknet für maximale Wirkstoffdichte, gleichmäßige Körnung und vollständige Konformität mit US-FDA und EU-Grenzwerten.',
    'prod.catAll': 'Alle Produkte',
    'prod.catCore': 'Kernpulver',
    'prod.catSpices': 'Gemahlene Gewürze & Saaten',
    'prod.catHerbs': 'Getrocknete Blätter & Kräuter',
    'prod.catFloral': 'Blüten & Botanicals',
    'prod.spicesSheet': 'Gewürz-Übersicht',
    'prod.herbalSheet': 'Kräuter-Übersicht',
    'prod.benchmark': 'Großhandels-Richtpreis',
    'prod.moq': 'Mindestbestellmenge (MOQ)',
    'prod.addRFQ': 'Zu RFQ hinzufügen',
    'prod.fullSpecs': 'Spezifikationen & COA',
    'prod.downloadCOA': 'Zertifiziertes COA herunterladen (PDF)',
    'prod.requestSample': '2kg Labormuster anfordern',

    // B2B Order Portal
    'portal.title': 'B2B-Angebotsrechner & Container-Ladeplaner',
    'portal.subtitle': 'Konfigurieren Sie FCL- (20ft / 40ft) oder LCL-Mischsendungen für Moringa, Kurkuma, Zwiebel, Knoblauch und Gewürze mit sofortigen Proforma-Preisen.',
    'portal.step1': 'Schritt 1: Seecontainer-Zuweisung',
    'portal.step2': 'Schritt 2: Ausgewählte Pulver & Verpackung',
    'portal.step3': 'Schritt 3: Incoterms & Zielhafen',
    'portal.step4': 'Schritt 4: Angaben des Importeurs',
    'portal.addPowder': 'Ware hinzufügen',
    'portal.loadGauge': 'Container-Füllstandsanzeige',
    'portal.totalCargo': 'Gesamtladungsvolumen',
    'portal.proformaTotal': 'Gesamtes Proforma-Angebot',
    'portal.submitRFQ': 'RFQ absenden & Proforma erstellen',
    'portal.sampleCheckbox': '2kg zertifiziertes Labormuster-Kit beilegen',
    'portal.incotermsLabel': 'Internationale Handelsklauseln (Incoterms 2020)',
    'portal.targetPort': 'Zielhafen & Land',

    // Supply Chain Map
    'map.title': 'Interaktive Transparenzkarte vom Feld zum Welthafen',
    'map.subtitle': 'Jedes Kilogramm von S2S Global Exim stammt aus geprüften Genossenschaften in Tamil Nadu. Entdecken Sie unsere Seerouten.',
    'map.tabRegional': 'Vom Erzeuger zum Hafen (Tamil Nadu)',
    'map.tabGlobal': 'Globale Seefrachtrouten',
    'map.batchLookup': 'Chargen-Herkunft & Labordaten prüfen',
    'map.traceButton': 'Charge verfolgen',

    // Certifications
    'cert.title': 'Exportlizenzen, Zertifikate & Sicherheitsdossiers',
    'cert.subtitle': 'Volle Konformität mit APEDA, Spices Board India, FSSAI, US-FDA und den Lebensmittelsicherheitsrichtlinien der Europäischen Union.',
    'cert.download': 'Alle Qualitätszertifikate herunterladen',

    // About
    'about.title': 'Verwurzelt in Cuddalore, Tamil Nadu · Verbunden mit Welthäfen',
    'about.subtitle': 'S2S Global Exim agiert ausschließlich als spezialisierter Warenexporteur und verbindet Erzeuger direkt mit internationalen Käufern.',

    // Contact
    'contact.title': 'Kontaktieren Sie S2S Global Exim',
    'contact.subtitle': 'Unsere Außenhandelsberater in Cuddalore betreuen Importeure, Verarbeiter und Händler in allen Zeitzonen.',
    'contact.corporateOffice': 'Unternehmenssitz:',
    'contact.address': '113 Kamaraj Nagar, Vanniar Palayam, Cuddalore, Tamil Nadu, Indien.',
    'contact.sendInquiry': 'Direkte Exportanfrage senden',
    'contact.submitButton': 'Anfrage an das Exportbüro übermitteln',
  },
};
