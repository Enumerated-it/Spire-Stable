import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Share2, 
  Search, 
  Sparkles,
  CheckCircle,
  ExternalLink,
  Award
} from 'lucide-react';
import { LEGAL_IDENTITY, contributionLabel, isContributionCertified } from '../data/servicesData';
import { ServiceCategory } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenAttestation: () => void;
  onCopyHubUrl: () => void;
  copiedHub: boolean;
  totalServicesCount: number;
  filteredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onOpenAttestation,
  onCopyHubUrl,
  copiedHub,
  totalServicesCount,
  filteredCount,
}) => {
  const categories: { id: string; label: string; countSuffix?: string }[] = [
    { id: 'all', label: 'Tous les services' },
    { id: 'juridique', label: 'Droit & Actes' },
    { id: 'finance', label: 'Finance & Stratégie' },
    { id: 'securite', label: 'Sécurité & Risques' },
    { id: 'tech', label: 'Propriété & Tech' },
  ];

  return (
    <header className="relative border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-100 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-10 w-[400px] h-[250px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Official Legal Top Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-4 py-2 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {LEGAL_IDENTITY.portalDesignation} • Actif
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300 font-mono tracking-wide">
              {LEGAL_IDENTITY.jurisdiction}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-amber-400/90 font-semibold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Apport : {contributionLabel()}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">ICE : {LEGAL_IDENTITY.iceNumber}</span>
          </div>
        </div>
      </div>

      {/* Main Identity Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-7">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Identity Left */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Écosystème Certifié de Droit Positif
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Cinzel',serif]">
                Objectio Hub
              </h1>
              <span className="text-sm sm:text-base font-semibold text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                par <span className="text-amber-200 underline decoration-amber-500/40 underline-offset-4">{LEGAL_IDENTITY.founderName}</span>
              </span>
            </div>

            <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
              Architecture centrale et portail de Droit Positif fédérant 15 services d’ingénierie juridique, financière et technologique, adossée à un{' '}
              <strong className="text-amber-300 font-semibold">apport en nature valorisé par inventaire ({LEGAL_IDENTITY.contribution.method})</strong>.
            </p>

            {/* Official Badges Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/40 shadow-sm text-xs text-slate-200">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"></span>
                <span className="text-slate-400">Apport en nature :</span>
                <strong className="text-amber-300 font-mono font-bold">{contributionLabel()}</strong>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs text-slate-200">
                <span className="text-slate-400">ICE :</span>
                <strong className="text-slate-200 font-mono font-medium">{LEGAL_IDENTITY.iceNumber}</strong>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-800/60 text-xs text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <strong className="font-mono">{LEGAL_IDENTITY.isocNumber}</strong>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-mono">
                <span>15 Services Connectés</span>
              </div>
            </div>
          </div>

          {/* Identity Right Actions */}
          <div className="flex flex-row sm:flex-col items-stretch sm:items-end justify-start gap-2.5 shrink-0">
            <button
              onClick={onOpenAttestation}
              disabled={!isContributionCertified()}
              title={isContributionCertified() ? undefined : 'Disponible après certification de l’inventaire MOC/MOC+'}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-950/40 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FileText className="w-4 h-4" />
              <span>{isContributionCertified() ? 'Attestation d’Apport' : 'Attestation d’Apport — inventaire en cours'}</span>
            </button>

            <button
              onClick={onCopyHubUrl}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs transition-colors cursor-pointer"
              title="Copier l'URL du Hub"
            >
              {copiedHub ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Lien du Hub copié !</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Partager le Hub</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Search & Deep Link Navigation Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par service, ancre (ex: #pv-certif, #redac)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 shadow-sm'
                      : 'bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filtering indicator */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>
              Affichage de <strong className="text-slate-200 font-mono">{filteredCount}</strong> sur <strong className="text-slate-200 font-mono">{totalServicesCount}</strong> services
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
