import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneWhatsapp: '',
    destinationCountry: '',
    inquiryTopic: 'Commercial Container Shipment (FCL)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [cuddaloreTime, setCuddaloreTime] = useState<string>('');
  const [buyerTime, setBuyerTime] = useState<string>('');

  useEffect(() => {
    const updateClocks = () => {
      // Cuddalore IST time (UTC+5:30)
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCuddaloreTime(istString);

      // Buyer local time
      const localString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setBuyerTime(localString);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phoneWhatsapp: '',
        destinationCountry: '',
        inquiryTopic: 'Commercial Container Shipment (FCL)',
        message: '',
      });
    }, 5000);
  };

  const whatsappLink = `https://wa.me/919894660672?text=${encodeURIComponent(
    'Hello S2S Global Exim Team, I am inquiring regarding bulk export of Moringa, Turmeric, Onion, and Garlic powders.'
  )}`;

  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Dedicated Merchandise Exporter · Direct Trade Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            {t('contact.title')}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Timezone Awareness */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Dual Timezone Display */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase">
                <Clock className="w-4 h-4" />
                <span>Synchronized Export Desk Hours</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono-numbers">
                <div className="p-3 bg-stone-900 rounded border border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-sans">
                    Cuddalore Corporate Office (IST)
                  </span>
                  <div className="text-lg font-bold text-white mt-1">
                    {cuddaloreTime || '09:00 AM'}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-sans">
                    Export Desk Active (08:00–20:00 IST)
                  </span>
                </div>

                <div className="p-3 bg-stone-900 rounded border border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-sans">
                    Your Local Timezone
                  </span>
                  <div className="text-lg font-bold text-amber-300 mt-1">
                    {buyerTime || '03:30 AM'}
                  </div>
                  <span className="text-[10px] text-stone-400 font-sans">
                    24/7 Priority Inquiries Logged
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm font-sans">{t('contact.corporateOffice')}</strong>
                  <p className="text-stone-300 mt-1 leading-relaxed text-xs">
                    S2S Global Exim<br />
                    113 Kamaraj Nagar, Vanniar Palayam,<br />
                    Cuddalore, Tamil Nadu, India.
                  </p>
                  <span className="text-stone-400 block mt-1">
                    Exclusively Merchandise Exporter · Direct Global Trade Operations
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-800/80">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm font-sans">Official WhatsApp &amp; Mobile:</strong>
                  <div className="font-mono-numbers text-amber-300 text-sm font-semibold mt-0.5">
                    +91 9894660672
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-[11px] font-semibold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp (+91 9894660672)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-800/80">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm font-sans">Official Commercial Inquiries:</strong>
                  <a
                    href="mailto:export@s2sglobalexim.com"
                    className="text-stone-300 hover:text-white underline font-mono-numbers text-xs mt-0.5 block"
                  >
                    export@s2sglobalexim.com
                  </a>
                  <a
                    href="mailto:trade@s2sglobalexim.com"
                    className="text-stone-400 hover:text-white underline font-mono-numbers text-xs block"
                  >
                    trade@s2sglobalexim.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Commercial Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8">
            <div className="space-y-1 mb-6">
              <h3 className="text-xl font-bold text-white font-display">
                {t('contact.sendInquiry')}
              </h3>
              <p className="text-xs text-stone-400">
                Guaranteed commercial response and proforma estimation within 12 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-950/60 border border-emerald-700 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Inquiry Received Successfully</h4>
                <p className="text-xs text-emerald-200 leading-relaxed max-w-md mx-auto">
                  Thank you. An export trade officer from our Cuddalore processing headquarters will contact your team via email and WhatsApp with relevant lab specifications and shipping tariffs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Henderson"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Pacific Spice Ingredients LLC"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="procurement@company.com"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneWhatsapp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono-numbers"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                      Target Destination Country & Port *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      placeholder="e.g. United Kingdom / Felixstowe"
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                      Primary Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryTopic}
                      onChange={(e) => setFormData({ ...formData, inquiryTopic: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Commercial Container Shipment (FCL)">Commercial Container Shipment (FCL 20ft/40ft)</option>
                      <option value="Certified Lab Sample Kit Request">Certified 2kg Lab Sample Kit Request</option>
                      <option value="Private Label OEM Retail Packaging">Private Label OEM Retail Packaging</option>
                      <option value="Custom Formulation & Mesh Specification">Custom Formulation & Mesh Specification</option>
                      <option value="General Trade Partnership">General Trade Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 uppercase mb-1">
                    Consignment Requirements & Inquiries
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target powders (Moringa, Turmeric, Onion, Garlic), target volume, target delivery month, and required certifications..."
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-md font-sans"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('contact.submitButton')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
