import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/products';
import { ShieldCheck, Award, FileCheck2, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const QualityCertifications: React.FC = () => {
  const { t } = useLanguage();
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadDossier = () => {
    setDownloadNotice('Packaging Official Exporter Quality Compliance Dossier (ZIP with APEDA, FSSAI, ISO, & Lab Standards)...');
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4500);
  };

  const complianceMatrix = [
    {
      hazard: 'Lead (Pb) Heavy Metal',
      euUsLimit: 'Max 2.0 ppm (EU 2023/915)',
      s2sStandard: '< 0.05 – 0.15 ppm',
      status: 'Surpasses Limit by 10x',
      instrument: 'ICP-MS Spectrometry',
    },
    {
      hazard: 'Cadmium (Cd)',
      euUsLimit: 'Max 0.20 ppm',
      s2sStandard: '< 0.02 ppm',
      status: 'Conforms to EU MRL',
      instrument: 'ICP-MS Spectrometry',
    },
    {
      hazard: 'Ethylene Oxide (ETO) Residue',
      euUsLimit: '< 0.02 mg/kg (Zero Tolerance)',
      s2sStandard: '100% ETO-Free (Steam Sterilized)',
      status: 'Zero ETO Guaranteed',
      instrument: 'GC-MS/MS Testing',
    },
    {
      hazard: 'Sudan Dyes (I, II, III, IV)',
      euUsLimit: 'Negative / Absent (< 10 ppb)',
      s2sStandard: 'Zero Artificial Coloration',
      status: 'HPLC Certified Pure',
      instrument: 'LC-MS/MS',
    },
    {
      hazard: 'Salmonella spp. in 25g',
      euUsLimit: 'Strictly Absent in 25g',
      s2sStandard: 'Absent in 25g / Negative',
      status: 'Microbiological Pass',
      instrument: 'ISO 6579 Culture',
    },
    {
      hazard: 'Escherichia coli (E. Coli)',
      euUsLimit: 'Absent in 1g (< 10 CFU/g)',
      s2sStandard: '< 10 CFU/g (Negative)',
      status: 'Pathogen Free',
      instrument: 'ISO 16649',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              International Trade Compliance & Regulatory Integrity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              {t('cert.title')}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl">
              {t('cert.subtitle')}
            </p>
          </div>

          <button
            onClick={handleDownloadDossier}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer self-start md:self-end shrink-0 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{t('cert.download')}</span>
          </button>
        </div>

        {downloadNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{downloadNotice}</span>
          </div>
        )}

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-emerald-800 tracking-wider">
                    {cert.category}
                  </span>
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {cert.name}
                </h3>
                <div className="text-xs text-stone-500">
                  Authority: {cert.authority}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500">License / Reg:</span>
                <span className="font-mono-numbers font-semibold text-stone-900">
                  {cert.regNumber}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Heavy Metal & Microbiological Limits Comparison Matrix */}
        <div className="bg-stone-900 text-white rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Analytical Rigor Benchmark</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                European Union & US-FDA Compliance Matrix
              </h3>
            </div>
            <div className="text-xs text-stone-400 font-mono-numbers">
              Tested by NABL / Eurofins Accredited Laboratories
            </div>
          </div>

          <div className="border border-stone-800 rounded-lg overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[600px]">
              <thead className="bg-stone-950 text-stone-400 font-semibold border-b border-stone-800">
                <tr>
                  <th className="py-3 px-4">Hazard / Parameter</th>
                  <th className="py-3 px-4">Statutory EU / US Import Limit</th>
                  <th className="py-3 px-4">S2S Batch Specification</th>
                  <th className="py-3 px-4">Verification Methodology</th>
                  <th className="py-3 px-4">Compliance Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 font-mono-numbers">
                {complianceMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-800/40">
                    <td className="py-3 px-4 font-sans font-medium text-white">
                      {row.hazard}
                    </td>
                    <td className="py-3 px-4 text-stone-400">
                      {row.euUsLimit}
                    </td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">
                      {row.s2sStandard}
                    </td>
                    <td className="py-3 px-4 text-stone-300 font-sans text-[11px]">
                      {row.instrument}
                    </td>
                    <td className="py-3 px-4 text-amber-300 font-sans text-[11px]">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-stone-400 leading-relaxed pt-2">
            Note: Every commercial shipment is accompanied by a certified Certificate of Analysis (COA) specifying tested values for heavy metals, pesticides, microbial parameters, and active bioactives (Curcumin / Allicin / Chlorophyll).
          </div>
        </div>
      </div>
    </section>
  );
};
