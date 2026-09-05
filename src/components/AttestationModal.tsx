import React from 'react';
import { X, Printer, ShieldCheck, Award, FileCheck, CheckCircle2 } from 'lucide-react';
import { LEGAL_IDENTITY } from '../data/servicesData';

interface AttestationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttestationModal: React.FC<AttestationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl shadow-amber-950/30 overflow-hidden text-slate-100 my-8">
        {/* Top toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 print:hidden">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="font-semibold text-sm tracking-wide text-amber-200 font-['Cinzel',serif]">
              Acte Certifié d'Apport • Objectio Hub
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimer l'Attestation
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Body (Styled like a solemn legal parchment/document) */}
        <div className="p-8 sm:p-10 space-y-6 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 print:bg-white print:text-black print:p-6">
          {/* Header of Certificate */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6 print:border-black">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest print:border-black print:text-black">
              Royaume du Maroc • Droit Positif
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Cinzel',serif] text-white tracking-wide print:text-black">
              ATTESTATION DE VALEUR D'APPORT CERTIFIÉE
            </h2>
            <p className="text-sm font-mono text-amber-300 print:text-gray-700">
              Écosystème Numérique & Juridique OBJECTIO
            </p>
          </div>

          {/* Identity & Legal Identifiers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs print:bg-gray-50 print:border-gray-300 print:text-black">
            <div>
              <span className="text-slate-400 block print:text-gray-500">Titulaire & Fondateur :</span>
              <strong className="text-slate-100 text-sm print:text-black">{LEGAL_IDENTITY.founderName}</strong>
              <div className="text-amber-400 font-semibold mt-0.5 print:text-black">Matricule : {LEGAL_IDENTITY.matricule}</div>
            </div>

            <div>
              <span className="text-slate-400 block print:text-gray-500">Identifiants Officiels :</span>
              <div className="text-slate-200 print:text-black">ICE : <strong>{LEGAL_IDENTITY.iceNumber}</strong></div>
              <div className="text-cyan-400 font-semibold print:text-black">{LEGAL_IDENTITY.isocNumber}</div>
            </div>
          </div>

          {/* Certified Amount Highlight */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/20 border border-amber-500/50 text-center space-y-1 print:bg-white print:border-black">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Montant Total de la Valeur d'Apport Évaluée et Certifiée
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono tracking-tight print:text-black">
              {LEGAL_IDENTITY.certifiedContribution}
            </div>
            <span className="text-[11px] text-slate-400 block">
              (Deux cent huit mille Dirhams Marocains • Certifié net d'évaluation)
            </span>
          </div>

          {/* Breakdown Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-amber-400" />
              Répartition Sommaire des Éléments d'Apport :
            </h3>
            
            <div className="divide-y divide-slate-800 rounded-lg border border-slate-800 overflow-hidden text-xs print:border-black print:divide-black">
              <div className="flex justify-between items-center p-3 bg-slate-950/50 print:bg-white">
                <div>
                  <strong className="text-slate-200 print:text-black">1. Actifs Immatériels & Propriété Intellectuelle</strong>
                  <p className="text-slate-400 text-[11px] print:text-gray-600">
                    Modèles contractuels Objectio, grilles d'audit, matrices de Droit Positif et suites méthodologiques.
                  </p>
                </div>
                <span className="font-mono font-semibold text-amber-300 shrink-0 ml-4 print:text-black">
                  92 000 MAD
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-950/50 print:bg-white">
                <div>
                  <strong className="text-slate-200 print:text-black">2. Plateforme Technologique & Outils Développés</strong>
                  <p className="text-slate-400 text-[11px] print:text-gray-600">
                    Suite de 15 services intégrés, passerelles QR CIH, module Traducteur LSF/LSA et Skill Generator.
                  </p>
                </div>
                <span className="font-mono font-semibold text-amber-300 shrink-0 ml-4 print:text-black">
                  76 000 MAD
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-950/50 print:bg-white">
                <div>
                  <strong className="text-slate-200 print:text-black">3. Fonds Opérationnel & Référentiels ISOC</strong>
                  <p className="text-slate-400 text-[11px] print:text-gray-600">
                    Accréditation ISOC N° 2374734, fonds de réserve documentaire et protocoles d'arbitrage.
                  </p>
                </div>
                <span className="font-mono font-semibold text-amber-300 shrink-0 ml-4 print:text-black">
                  40 000 MAD
                </span>
              </div>
            </div>
          </div>

          {/* Legal Certification Statement */}
          <div className="text-xs text-slate-400 leading-relaxed space-y-2 border-t border-slate-800 pt-4 print:border-black print:text-gray-700">
            <p>
              Le présent document atteste que l’ensemble des 15 services référencés sur le portail <strong>Objectio Hub</strong> constituent le socle d’exploitation directe et certifiée de <strong>M. Mohamed MORCHID (964 R/1970)</strong>.
            </p>
            <p className="text-[11px] italic">
              Conformément aux dispositions du Droit des Obligations et des Contrats et aux règles de transparence des affaires en vigueur au Maroc.
            </p>
          </div>

          {/* Seal and Signature Block */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-800/80 text-xs print:border-black">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="font-semibold text-slate-200 print:text-black">Horodatage d’Intégrité</div>
                <div className="text-[11px] text-slate-500 font-mono">Code Réf : OBJ-208K-964R</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[11px] text-slate-400">Pour valoir ce que de droit,</div>
              <div className="font-bold text-amber-300 font-['Cinzel',serif] text-sm print:text-black">
                Mohamed MORCHID
              </div>
              <div className="text-[10px] text-slate-500 font-mono">Fondateur • Objectio Hub</div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer"
          >
            Fermer le document
          </button>
        </div>
      </div>
    </div>
  );
};
