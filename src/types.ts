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
  /** Numéro d'état civil : usage restreint à l'attestation (jamais en <meta>, header, footer). */
  matriculeRestricted: string;
  contribution: {
    /** null tant que l'inventaire MOC/MOC+ n'est pas certifié */
    amountMAD: number | null;
    status: 'A_CERTIFIER_PAR_INVENTAIRE' | 'CERTIFIE';
    method: string;
    inventoryScope: string;
  };
  iceNumber: string;
  isocNumber: string;
  portalDesignation: string;
  jurisdiction: string;
  bank: {
    name: string;
    agency: string;
    rib: string;
    iban: string;
    swift: string;
  };
}
