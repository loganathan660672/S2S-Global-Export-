import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, MapPin, Award, ShieldCheck, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroSlideshowProps {
  onExploreProducts: () => void;
  onExploreMap: () => void;
  onOpenRFQ: () => void;
}

interface Slide {
  id: string;
  image: string;
  titleKey?: string;
  subKey?: string;
  title: string;
  subtitle: string;
  badge: string;
  accent: string;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  onExploreProducts,
  onExploreMap,
  onOpenRFQ,
}) => {
  const { t } = useLanguage();

  const slides: Slide[] = [
    {
      id: 'panoramic-spices',
      image: '/src/assets/images/hero_agro_panoramic_1794476901626.jpg',
      title: t('hero.headline'),
      subtitle: t('hero.subhead'),
      badge: t('hero.badge'),
      accent: 'Emerald & Gold',
    },
    {
      id: 'four-flagships',
      image: '/src/assets/images/hero_spices_export_1794474793894.jpg',
      title: 'Moringa, Turmeric, Onion & Garlic Powders at Source',
      subtitle: 'Sourced from the agricultural heartlands of Cuddalore, Erode & Dindigul. Zero intermediaries, NABL/Eurofins certified batch COAs.',
      badge: 'Direct Farm-Gate to Container Port',
      accent: 'High Bioactive Standard',
    },
    {
      id: 'herbal-leaves',
      image: '/src/assets/images/product_herbal_leaves_1794476902941.jpg',
      title: 'Dehydrated Leaves, Herbs & Whole Botanicals',
      subtitle: 'Sun-dried and cold-dehydrated Moringa leaves, Curry leaves, Kasuri methi, and Holy Basil for premium teas and seasoning extracts.',
      badge: 'Low-Heat Dehumidification (<42°C)',
      accent: 'Chlorophyll Preserved',
    },
    {
      id: 'red-chilli',
      image: '/src/assets/images/product_red_chilli_1794476902001.jpg',
      title: 'Stemless Guntur Chillies, Pepper & Whole Ground Spices',
      subtitle: 'Calibrated ASTA color, standardized Scoville heat, and piperine-rich Malabar black pepper. 100% free from Sudan dyes.',
      badge: 'Spices Board India Registered',
      accent: 'Zero Adulteration',
    },
    {
      id: 'rose-petals',
      image: '/src/assets/images/product_rose_petal_powder_1794476903534.jpg',
      title: 'Organic Damask Rose Petals & Natural Floral Powders',
      subtitle: 'Velvety pink micronized rose petal powder and delicate whole dried botanicals for luxury cosmetics, skincare, and gourmet teas.',
      badge: 'Export Cosmetic & Food Grade',
      accent: 'Damask Rose Essence',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative overflow-hidden bg-stone-950 text-white min-h-[640px] lg:min-h-[740px] flex flex-col justify-between">
      {/* Background Slideshow Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-40 scale-100' : 'opacity-0 pointer-events-none scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-7000 ease-linear"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Luxury Vignette & Deep Contrast Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Editorial Presentation */}
          <div className="lg:col-span-8 space-y-6">
            {/* Origin & Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-400/40 bg-white shrink-0 shadow-md">
                <img
                  src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
                  alt="S2S Global Exim Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 font-sans">
                <span className="flex items-center gap-1.5 text-stone-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Cuddalore, Tamil Nadu, India
                </span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span className="text-amber-300 font-bold">Merchandise Exporter</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span className="text-stone-400 font-mono-numbers">APEDA &amp; FSSAI Licensed</span>
              </div>
            </div>

            {/* Headline with luxury serif accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              {currentSlide.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-sans">
              {currentSlide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all cursor-pointer shadow-lg hover:shadow-amber-400/20"
              >
                <span>{t('hero.ctaPortal')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919894660672"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-700 border border-emerald-600 rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>{t('hero.ctaWhatsapp')}</span>
              </a>

              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors cursor-pointer"
              >
                <span>{t('hero.ctaCatalog')}</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('hero.proof1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hero.proof2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('hero.proof3')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hero.proof4')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Slide Spotlight & Corporate Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-6 backdrop-blur-md shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Export Slide {currentIndex + 1} of {slides.length}
                </span>
                <span className="text-[11px] font-mono-numbers px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Corporate Office Card */}
              <div className="space-y-2 text-xs">
                <div className="text-stone-400 text-[11px] uppercase">{t('hero.corpOffice')}:</div>
                <div className="text-white font-medium leading-relaxed bg-stone-950 p-3 rounded-lg border border-stone-800">
                  S2S Global Exim<br />
                  113 Kamaraj Nagar, Vanniar Palayam,<br />
                  Cuddalore, Tamil Nadu, India.
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono-numbers">
                <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans">Export WhatsApp:</span>
                  <a href="https://wa.me/919894660672" className="text-amber-300 font-semibold hover:underline">
                    +91 9894660672
                  </a>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/80">
                  <span className="text-stone-400 font-sans">Business Status:</span>
                  <span className="text-emerald-400">Merchandise Exporter</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-400 font-sans">Seaport Gateways:</span>
                  <span className="text-stone-200">Chennai &amp; Tuticorin</span>
                </div>
              </div>

              <button
                onClick={onExploreMap}
                className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center block"
              >
                Inspect Tamil Nadu Farm-to-Port Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Slideshow Controls & Progress Thumbnails */}
      <div className="relative z-10 border-t border-stone-800/90 bg-stone-950/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Controls: Prev / Play-Pause / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-md bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="text-xs text-stone-400 font-mono-numbers ml-2">
              {currentIndex + 1} / {slides.length}
            </span>
          </div>

          {/* Interactive Slide Dots */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1 rounded text-xs transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  idx === currentIndex
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-xs'
                    : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                <span>{s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}</span>
              </button>
            ))}
          </div>

          {/* Quick Incoterm reminder */}
          <div className="hidden lg:block text-[11px] text-stone-400 font-mono-numbers">
            FOB Chennai / Tuticorin · CIF Rotterdam · CIF New York · CIF Jebel Ali
          </div>
        </div>
      </div>
    </section>
  );
};
