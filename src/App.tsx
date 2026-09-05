import React, { useState, useEffect, useMemo } from 'react';
import { SERVICES_LIST, LEGAL_IDENTITY } from './data/servicesData';
import { ServiceItem } from './types';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { AttestationModal } from './components/AttestationModal';
import { Footer } from './components/Footer';
import { getAnchorFromUrl, setAnchorInUrl, copyToClipboard, getFullDeepLink } from './utils/deepLink';
import { 
  ShieldCheck, 
  Award, 
  Hash, 
  ExternalLink, 
  Layers, 
  Sparkles,
  Search,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [isAttestationOpen, setIsAttestationOpen] = useState(false);
  const [copiedHub, setCopiedHub] = useState(false);

  // Sync state with URL hash (Deep Linking requirement)
  useEffect(() => {
    const handleHashChange = () => {
      const anchor = getAnchorFromUrl();
      if (anchor) {
        const found = SERVICES_LIST.find(
          (s) => s.anchor.toLowerCase() === anchor.toLowerCase()
        );
        if (found) {
          setActiveService(found);
          // Scroll to the card if present
          const el = document.getElementById(found.anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      } else {
        setActiveService(null);
      }
    };

    // Initial check on page load
    handleHashChange();

    // Listen for hash changes (browser back/forward, direct link clicks)
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectService = (service: ServiceItem) => {
    setAnchorInUrl(service.anchor);
    setActiveService(service);
  };

  const handleCloseServiceModal = () => {
    setActiveService(null);
    setAnchorInUrl('');
  };

  const handleNavigateService = (direction: 'prev' | 'next') => {
    if (!activeService) return;
    const currentIndex = SERVICES_LIST.findIndex((s) => s.id === activeService.id);
    if (currentIndex === -1) return;

    let targetIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex >= 0 && targetIndex < SERVICES_LIST.length) {
      const nextService = SERVICES_LIST[targetIndex];
      handleSelectService(nextService);
    }
  };

  const activeServiceIndex = useMemo(() => {
    if (!activeService) return -1;
    return SERVICES_LIST.findIndex((s) => s.id === activeService.id);
  }, [activeService]);

  // Filter services by search and category
  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.code.toLowerCase().includes(q) ||
        service.anchor.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.legalBasis.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyHubUrl = async () => {
    const fullUrl = window.location.origin + window.location.pathname;
    const success = await copyToClipboard(fullUrl);
    if (success) {
      setCopiedHub(true);
      setTimeout(() => setCopiedHub(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500/20 selection:text-amber-300">
      {/* Header with full identity and search bar */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onOpenAttestation={() => setIsAttestationOpen(true)}
        onCopyHubUrl={handleCopyHubUrl}
        copiedHub={copiedHub}
        totalServicesCount={SERVICES_LIST.length}
        filteredCount={filteredServices.length}
      />

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Deep Link Anchor Strip */}
        <section aria-label="Ancres de deep linking" className="overflow-hidden">
          <div className="flex items-center gap-2 mb-2.5 text-xs text-slate-400 font-mono">
            <Hash className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold uppercase tracking-wider">
              Ancres Deep Linking Directes (15 Services) :
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SERVICES_LIST.map((s) => {
              const isCurrent = activeService?.id === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.anchor}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectService(s);
                  }}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all border ${
                    isCurrent
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                      : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-amber-400/90 font-bold">{s.code}</span>
                  <span>#{s.anchor}</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Legal Ecosystem Overview Cards */}
        <section aria-label="Piliers du portail" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Valeur d'Apport Probatoire</span>
              <strong className="text-base text-amber-300 font-mono font-bold">
                {LEGAL_IDENTITY.certifiedContribution}
              </strong>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Consacrée aux 15 services Objectio par Mohamed MORCHID.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Immatriculation Fiscale & Légale</span>
              <strong className="text-base text-slate-200 font-mono font-bold">
                ICE {LEGAL_IDENTITY.iceNumber}
              </strong>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Conformité stricte au Droit Positif et au D.O.C marocain.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Gouvernance & Internet Society</span>
              <strong className="text-base text-cyan-300 font-mono font-bold">
                {LEGAL_IDENTITY.isocNumber}
              </strong>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Matricule titulaire 964 R/1970 • Standards d'intégrité numérique.
              </p>
            </div>
          </div>
        </section>

        {/* 15 Services Grid */}
        <section aria-label="Grille des 15 services">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white font-['Cinzel',serif] tracking-wide">
                Grille des 15 Services d'Ingénierie Juridique
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {filteredServices.length} {filteredServices.length > 1 ? 'services affichés' : 'service affiché'}
            </span>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
              <p className="text-sm text-slate-400">
                Aucun service ne correspond à votre recherche ou filtre actuel.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isActiveAnchor={activeService?.id === service.id}
                  onOpenService={handleSelectService}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Interactive Service Detail & Workbench Modal */}
      <ServiceModal
        service={activeService}
        onClose={handleCloseServiceModal}
        onNavigateService={handleNavigateService}
        hasPrev={activeServiceIndex > 0}
        hasNext={activeServiceIndex >= 0 && activeServiceIndex < SERVICES_LIST.length - 1}
      />

      {/* Legal Certified Contribution Attestation Modal (208 000 MAD) */}
      <AttestationModal
        isOpen={isAttestationOpen}
        onClose={() => setIsAttestationOpen(false)}
      />

      {/* Complete Legal Footer */}
      <Footer
        onSelectService={handleSelectService}
        onOpenAttestation={() => setIsAttestationOpen(true)}
      />
    </div>
  );
}
