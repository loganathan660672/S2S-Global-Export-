import React, { useState } from 'react';
import { CurrencyCode } from '../types';
import { CURRENCY_RATES } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import { Globe, Menu, X, ArrowUpRight, Languages } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  onOpenRFQ: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  onOpenRFQ,
}) => {
  const { language, setLanguage, currentOption, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'products', label: t('nav.products') },
    { id: 'supply-chain', label: t('nav.supplyChain') },
    { id: 'b2b-portal', label: t('nav.b2bPortal') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8 h-20">
          {/* Zone 1: Brand wordmark & emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-emerald-900/15 shadow-2xs bg-white shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/src/assets/images/s2s_global_exim_logo_1794476403636.jpg"
                alt="S2S Global Exim Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 font-display whitespace-nowrap shrink-0 group-hover:text-emerald-800 transition-colors">
                S2S Global Exim
              </span>
              <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider font-sans whitespace-nowrap">
                {t('nav.merchandiseExporter')}
              </span>
            </div>
          </button>

          {/* Zone 2: Single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors relative cursor-pointer ${
                  activeTab === link.id
                    ? 'text-stone-950 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary action + Language Switcher + Currency selector */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setCurrencyDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors cursor-pointer"
                title="Select Export Market Language"
                aria-label="Select language"
              >
                <span className="text-sm">{currentOption.flag}</span>
                <span className="font-mono-numbers uppercase text-[11px]">{currentOption.code}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-stone-200 rounded-lg shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1 text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Languages className="w-3 h-3 text-stone-400" />
                    <span>Language / اللغة</span>
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-stone-50 transition-colors cursor-pointer ${
                        language === lang.code
                          ? 'text-emerald-800 font-bold bg-emerald-50/70'
                          : 'text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </div>
                      <span className="text-[10px] text-stone-400 uppercase font-mono-numbers">
                        {lang.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setCurrencyDropdownOpen(!currencyDropdownOpen);
                  setLangDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
                title="Select Trade Currency"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span className="font-mono-numbers">{currency}</span>
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-stone-200 rounded-lg shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Trade Currency
                  </div>
                  {Object.values(CURRENCY_RATES).map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-stone-50 transition-colors cursor-pointer ${
                        currency === curr.code
                          ? 'text-emerald-700 font-semibold bg-emerald-50/50'
                          : 'text-stone-700'
                      }`}
                    >
                      <span>{curr.label}</span>
                      <span className="font-mono-numbers text-stone-400">{curr.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenRFQ}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              <span>{t('nav.requestRFQ')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                activeTab === link.id
                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors"
            >
              <span>{t('nav.requestRFQ')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
