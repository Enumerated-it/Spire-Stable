import { LegalIdentity, ServiceItem } from '../types';

export const LEGAL_IDENTITY: LegalIdentity = {
  founderName: 'Mohamed MORCHID',
  matricule: '964 R/1970',
  certifiedContribution: '208 000 MAD',
  iceNumber: '003707910000033',
  isocNumber: 'ISOC N° 2374734',
  portalDesignation: 'Portail de Droit Positif',
  jurisdiction: 'Royaume du Maroc • Registre d’Apport & Droit Positif',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 's01',
    code: 'S01',
    title: 'PV / Certification',
    anchor: 'pv-certif',
    category: 'juridique',
    categoryLabel: 'Droit & Actes',
    tagline: 'Procès-Verbaux probatoires et certification d’intégrité juridique',
    shortDesc: 'Établissement, horodatage et certification probatoire des procès-verbaux d’assemblée, constats et déclarations sous seing privé.',
    legalBasis: 'Droit des Obligations et des Contrats (D.O.C) • Loi 53-05 relative à l’échange électronique de données juridiques.',
    features: [
      'Génération automatisée de PV d’Assemblée Générale Ordinaire et Extraordinaire',
      'Empreinte de conformité probatoire avec horodatage scellé',
      'Registre d’émargement certifié avec vérification d’identité',
      'Exportation au format opposable aux tiers et institutions'
    ],
    primaryMetric: {
      label: 'Valeur Probatoire',
      value: '100% Opposable'
    }
  },
  {
    id: 's02',
    code: 'S02',
    title: 'Rédaction Objectio',
    anchor: 'redac',
    category: 'juridique',
    categoryLabel: 'Droit & Actes',
    tagline: 'Formalisme contractuel normé et rédaction d’actes de Droit Positif',
    shortDesc: 'Suite rédactionnelle certifiée pour contrats commerciaux, pactes d’associés, protocoles de cession et conventions spécifiques.',
    legalBasis: 'Code de Commerce marocain • Principes généraux du Droit Positif des affaires.',
    features: [
      'Bibliothèque de clauses pénales, de réserve de propriété et de confidentialité',
      'Assistant de cohérence textuelle et de conformité légale',
      'Gestion des annexes, avenants et conditions suspensives',
      'Vérification automatisée des mentions obligatoires'
    ],
    primaryMetric: {
      label: 'Actes Types',
      value: '48 Modèles'
    }
  },
  {
    id: 's03',
    code: 'S03',
    title: 'Business Plan',
    anchor: 'business-plan',
    category: 'finance',
    categoryLabel: 'Finance & Stratégie',
    tagline: 'Modélisation financière et viabilité sur base d’apport certifié',
    shortDesc: 'Architecture prévisionnelle, compte de résultat pro forma, plan de trésorerie et intégration de la valeur d’apport (208 000 MAD).',
    legalBasis: 'Plan Comptable Général Marocain (CGNC) • Normes d’évaluation des apports en nature et incorporels.',
    features: [
      'Projection financière pluriannuelle (3 à 5 exercices)',
      'Intégration comptable de l’apport certifié de 208 000 MAD',
      'Calcul automatique du BFR, CAF, VAN et TRI',
      'Synthèse exécutive prête pour investisseurs et banques'
    ],
    primaryMetric: {
      label: 'Apport de Référence',
      value: '208 000 MAD'
    }
  },
  {
    id: 's04',
    code: 'S04',
    title: 'Prix de Revient',
    anchor: 'prix-revient',
    category: 'finance',
    categoryLabel: 'Finance & Stratégie',
    tagline: 'Calcul analytique des coûts, marges brutes et seuil de rentabilité',
    shortDesc: 'Décomposition analytique unitaire : charges directes, charges indirectes, coefficient de sécurité et calcul du point mort en MAD.',
    legalBasis: 'Comptabilité analytique de gestion • Règles fiscales sur les prix de transfert et marges réputées normales.',
    features: [
      'Ventilation dynamique charges fixes vs variables',
      'Calculateur instantané du coefficient multiplicateur de vente',
      'Simulation d’impact des remises et fluctuations de charges',
      'Visualisation graphique du point mort d’exploitation'
    ],
    primaryMetric: {
      label: 'Précision Analytique',
      value: 'Au Centime MAD'
    }
  },
  {
    id: 's05',
    code: 'S05',
    title: "Convention d'Entraide",
    anchor: 'convention-entraide',
    category: 'juridique',
    categoryLabel: 'Droit & Actes',
    tagline: 'Protocoles de solidarité, coopération et mutualisation inter-entreprises',
    shortDesc: 'Cadre juridique sécurisé pour la mise en commun de moyens, assistance technique réciproque et partenariats stratégiques.',
    legalBasis: 'Articles 723 et suivants du D.O.C • Régime juridique des groupements d’intérêt et conventions d’assistance.',
    features: [
      'Encadrement de la non-subordination et indépendance juridique',
      'Clause de répartition équitable des charges mutualisées',
      'Mécanisme d’arbitrage amiable et résolution de différends',
      'Attestation de conformité déontologique'
    ],
    primaryMetric: {
      label: 'Sécurité Juridique',
      value: 'Cadre Bilatéral'
    }
  },
  {
    id: 's06',
    code: 'S06',
    title: 'Alerte Sécurité',
    anchor: 'alerte-securite',
    category: 'securite',
    categoryLabel: 'Sécurité & Risques',
    tagline: 'Veille réglementaire proactive et prévention des risques d’exploitation',
    shortDesc: 'Surveillance continue des obligations légales, délais de forclusion, échéances de conformité CNDP et alertes de vulnérabilité.',
    legalBasis: 'Loi 09-08 relative à la protection des données personnelles • Réglementation sur la conformité d’entreprise.',
    features: [
      'Niveaux de criticité gradués (Informatif, Vigilance, Critique)',
      'Décompte des délais légaux et calendrier des déclarations',
      'Check-lists de remédiation immédiate',
      'Journal d’audit horodaté pour démonstration de diligence raisonnable'
    ],
    primaryMetric: {
      label: 'Statut de Veille',
      value: 'Temps Réel'
    }
  },
  {
    id: 's07',
    code: 'S07',
    title: 'Gestion Licences',
    anchor: 'gestion-licences',
    category: 'tech',
    categoryLabel: 'Propriété & Tech',
    tagline: 'Administration des droits d’exploitation, brevets et actifs immatériels',
    shortDesc: 'Traçabilité des concessions de licences, périmètres territoriaux, redevances (royalties) et conformité des marques déposées.',
    legalBasis: 'Loi 17-97 relative à la protection de la propriété industrielle • Accords OMPI / OMPIC.',
    features: [
      'Registre centralisé des licences actives de l’écosystème Objectio',
      'Génération de certificats de concession d’usage exclusif / non-exclusif',
      'Suivi des redevances et contrôles d’intégrité logicielle',
      'Archivage cryptographique des contrats de licence'
    ],
    primaryMetric: {
      label: 'Actifs Immatériels',
      value: 'Protégés OMPIC'
    }
  },
  {
    id: 's08',
    code: 'S08',
    title: 'Grille Tarifaire',
    anchor: 'grille-tarifaire',
    category: 'finance',
    categoryLabel: 'Finance & Stratégie',
    tagline: 'Barème transparent des prestations certifiées et forfaits d’actes',
    shortDesc: 'Consultez la grille tarifaire officielle en Dirhams (MAD) : rédaction d’actes, audits de conformité, forfaits annuels et certifications.',
    legalBasis: 'Transparence tarifaire et information précontractuelle • Pratiques commerciales loyales.',
    features: [
      'Barème détaillé par typologie de prestation juridique et technique',
      'Simulateur de devis immédiat avec ventilation HT / TVA',
      'Conditions de règlement et modalités d’échelonnement',
      'Engagement de prix ferme avec attestation d’honoraires'
    ],
    primaryMetric: {
      label: 'Transparence',
      value: 'Devis Immédiat'
    }
  },
  {
    id: 's09',
    code: 'S09',
    title: 'Skill Generator',
    anchor: 'skill-generator',
    category: 'tech',
    categoryLabel: 'Propriété & Tech',
    tagline: 'Cartographie des compétences juridiques et référentiels de qualification',
    shortDesc: 'Outil de formalisation des compétences opérationnelles, matrices d’évaluation et fiches d’habilitation conformes aux standards ISOC.',
    legalBasis: 'Référentiels internationaux ISOC (Internet Society) • Normes de qualification professionnelle.',
    features: [
      'Générateur de matrices de compétences pondérées',
      'Évaluation d’aptitude réglementaire et juridique',
      'Attestation de qualification avec identifiant ISOC N° 2374734',
      'Cartographie dynamique des expertises métiers'
    ],
    primaryMetric: {
      label: 'Accréditation',
      value: 'ISOC N° 2374734'
    }
  },
  {
    id: 's10',
    code: 'S10',
    title: 'Paiement QR (CIH)',
    anchor: 'paiement-cih',
    category: 'finance',
    categoryLabel: 'Finance & Stratégie',
    tagline: 'Règlement instantané et sécurisé par QR Code bancaire CIH Bank',
    shortDesc: 'Générez ou scannez un QR Code bancaire certifié pour effectuer un virement instantané CIH Bank avec référence de dossier scellée.',
    legalBasis: 'Réglementation Bank Al-Maghrib sur les paiements électroniques et virements instantanés.',
    features: [
      'Génération dynamique du code QR avec montant en MAD et numéro de dossier',
      'Coordonnées bancaires officielles intégrées (RIB CIH)',
      'Génération de reçu d’opération probatoire avec hash de transaction',
      'Compatible avec toutes les applications bancaires marocaines supportant le QR'
    ],
    primaryMetric: {
      label: 'Canal Bancaire',
      value: 'CIH Bank Direct'
    }
  },
  {
    id: 's11',
    code: 'S11',
    title: 'Traducteur LSF/LSA',
    anchor: 'lsf-lsa',
    category: 'juridique',
    categoryLabel: 'Droit & Actes',
    tagline: 'Accessibilité juridique inclusive en Langue des Signes (LSF / LSA)',
    shortDesc: 'Transposition terminologique des concepts de Droit Positif en Langue des Signes Française (LSF) et Langue des Signes Arabe (LSA).',
    legalBasis: 'Convention ONU relative aux droits des personnes handicapées • Principes constitutionnels d’accès universel au Droit.',
    features: [
      'Lexique juridique bilingue spécialisé (Français / Arabe / Signes)',
      'Fiches illustrées de décomposition gestuelle pour concepts clés',
      'Transcription simplifiée pour justiciables sourds et malentendants',
      'Module d’assistance pour entretiens et signatures d’actes'
    ],
    primaryMetric: {
      label: 'Accessibilité',
      value: 'LSF & LSA Inclus'
    }
  },
  {
    id: 's12',
    code: 'S12',
    title: 'Carnet de Questions',
    anchor: 'carnet-questions',
    category: 'juridique',
    categoryLabel: 'Droit & Actes',
    tagline: 'Audit interrogatif, FAQ doctrinale et recueil des diligences',
    shortDesc: 'Base structurée d’interrogations juridiques, points de doctrine appliqués, formalités obligatoires et réponses argumentées en Droit Positif.',
    legalBasis: 'Doctrine juridique marocaine • Jurisprudence de la Cour de Cassation • Principes de sécurité juridique.',
    features: [
      'Recherche thématique ciblée (Sociétés, Fiscalité, Contrats, Responsabilité)',
      'Fiches de synthèse décisionnelle avec citations de textes légaux',
      'Formulaire de soumission de nouvelle question d’arbitrage',
      'Historique des consultations et conclusions probatoires'
    ],
    primaryMetric: {
      label: 'Base Doctrinale',
      value: 'Audit Structuré'
    }
  },
  {
    id: 's13',
    code: 'S13',
    title: 'Tri-Projet',
    anchor: 'tri-projet',
    category: 'tech',
    categoryLabel: 'Propriété & Tech',
    tagline: 'Matrice de décision multicritère, arbitrage et sélection stratégique',
    shortDesc: 'Modèle algorithmique de qualification de projets : alignement juridique, rentabilité prévisionnelle, risque réglementaire et faisabilité.',
    legalBasis: 'Gouvernance d’entreprise • Méthodes d’aide à la décision multicritère (AHP/ELECTRE) adaptées au Droit.',
    features: [
      'Scoring pondéré sur 4 axes (Juridique, Économique, Complexité, Urgence)',
      'Recommandation automatisée : Valider, Réviser, Ajourner ou Écarter',
      'Rapport d’arbitrage motivé pour assemblées ou investisseurs',
      'Matrice visuelle de positionnement stratégique'
    ],
    primaryMetric: {
      label: 'Algorithme',
      value: 'Scoring sur 100'
    }
  },
  {
    id: 's14',
    code: 'S14',
    title: 'Suivi Séquences',
    anchor: 'suivi-sequences',
    category: 'securite',
    categoryLabel: 'Sécurité & Risques',
    tagline: 'Chronogramme procédural, jalons légaux et échéanciers d’exécution',
    shortDesc: 'Traçabilité séquentielle des actes : rédaction, signature, enregistrement fiscal, dépôt au greffe, publication au Bulletin Officiel.',
    legalBasis: 'Procédures du Tribunal de Commerce • Délais légaux de publication et d’immatriculation.',
    features: [
      'Timeline dynamique par étapes clés de constitution ou modification',
      'Détection automatique des dépassements de délais réglementaires',
      'Rappels proactifs des formalités subséquentes',
      'Exportation du rapport séquentiel certifié conforme'
    ],
    primaryMetric: {
      label: 'Contrôle Procédural',
      value: '5 Jalons Clés'
    }
  },
  {
    id: 's15',
    code: 'S15',
    title: 'Générateur de QR',
    anchor: 'generateur-qr',
    category: 'tech',
    categoryLabel: 'Propriété & Tech',
    tagline: 'Empreintes QR haute définition pour actes, certifications et traçabilité',
    shortDesc: 'Générez des codes QR sécurisés contenant les signatures d’actes, métadonnées légales, liens profonds d’intégrité et certificats Objectio.',
    legalBasis: 'Standard ISO/IEC 18004 • Norme de traçabilité documentaire et signature électronique.',
    features: [
      'Génération instantanée en direct avec prévisualisation et correction d’erreur',
      'Intégration automatique des métadonnées légales (ICE, ISOC, R/1970)',
      'Téléchargement haute résolution PNG ou vecteur SVG',
      'Test de lecture et validation de conformité du contenu'
    ],
    primaryMetric: {
      label: 'Résolution',
      value: 'Vectoriel & HD'
    }
  }
];
