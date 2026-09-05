export type ServiceCategory = 'juridique' | 'finance' | 'securite' | 'tech';

export interface ServiceItem {
  id: string; // 's01', 's02', etc.
  code: string; // 'S01', 'S02', etc.
  title: string;
  anchor: string; // 'pv-certif', 'redac', 'lsf-lsa', etc.
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  shortDesc: string;
  legalBasis: string;
  features: string[];
  primaryMetric: {
    label: string;
    value: string;
  };
  sampleData?: Record<string, any>;
}

export interface LegalIdentity {
  founderName: string;
  matricule: string;
  certifiedContribution: string;
  iceNumber: string;
  isocNumber: string;
  portalDesignation: string;
  jurisdiction: string;
}
