import React from 'react';
import { ShieldCheck, Hash, Award, ArrowUp, FileText } from 'lucide-react';
import { LEGAL_IDENTITY, SERVICES_LIST, contributionLabel, isContributionCertified } from '../data/servicesData';
import { ServiceItem } from '../types';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenAttestation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenAttestation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      {/* Deep Link Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-900">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-amber-400" />
            <span className="font-mono font-semibold uppercase tracking-wider text-slate-300 text-xs">
              Index des 15 Ancres de Deep Linking (Navigation Directe)
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Haut de page</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 font-mono text-[11px]">
          {SERVICES_LIST.map((srv) => (
            <a
              key={srv.id}
              href={`#${srv.anchor}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectService(srv);
              }}
              className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 text-slate-400 hover:text-amber-300 transition-all group"
            >
              <span className="truncate group-hover:text-slate-200">
                <strong className="text-amber-400/90 mr-1.5">{srv.code}</strong>
                {srv.title.split('/')[0].trim()}
              </span>
              <span className="text-[10px] text-slate-600 group-hover:text-amber-400/80 shrink-0 ml-1">
                #{srv.anchor}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Official Legal Identification & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-['Cinzel',serif] text-sm font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>OBJECTIO HUB — PORTAIL DE DROIT POSITIF</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
            Propriété exclusive de <strong>{LEGAL_IDENTITY.founderName}</strong>. 
            Écosystème fondé sur un apport en nature : <span className="text-amber-300 font-mono font-semibold">{contributionLabel()}</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] font-mono text-slate-500">
            <span>ICE : {LEGAL_IDENTITY.iceNumber}</span>
            <span>•</span>
            <span className="text-cyan-400">{LEGAL_IDENTITY.isocNumber}</span>
            <span>•</span>
            <span>{LEGAL_IDENTITY.jurisdiction}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onOpenAttestation}
            disabled={!isContributionCertified()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isContributionCertified() ? "Voir l'Attestation d'Apport" : 'Attestation disponible après inventaire'}</span>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-3 text-center text-[11px] text-slate-600 font-mono">
        © {new Date().getFullYear()} Objectio Hub • Mohamed MORCHID • Conformité D.O.C & Droit Positif
      </div>
    </footer>
  );
};
