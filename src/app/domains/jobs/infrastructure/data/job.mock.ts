import { JobOffer } from '../../domain/entities/job-offer.entity';

/**
 * Données d'exemple affichées quand l'API `/api/v1/jobs` n'existe pas encore
 * (voir jobs-list.component.ts) — uniquement pour prévisualiser le rendu de la
 * liste, jamais envoyées au serveur. À retirer une fois le backend branché.
 */
export const MOCK_JOBS: JobOffer[] = [
  {
    id: 1,
    domain: { id: 1, labelFr: 'Chantier', labelEn: 'Construction site' },
    titleFr: 'Maçons, coffreurs, ferrailleurs',
    titleEn: 'Masons, formworkers, rebar workers',
    descriptionFr: "Nous recherchons des profils expérimentés pour renforcer nos équipes gros œuvre sur plusieurs chantiers.",
    descriptionEn: 'We are looking for experienced profiles to strengthen our structural work teams on several sites.',
    metaFr: 'Abidjan et intérieur du pays · CDD de chantier · temps plein · 2 ans minimum',
    metaEn: 'Abidjan and inland · fixed-term site contract · full-time · 2 years min.',
    publishedAt: '2026-09-01',
    deadline: '2026-09-30',
    missions: [
      { fr: 'Réaliser les travaux de gros œuvre', en: 'Carry out structural works' },
      { fr: 'Respecter les plans et consignes de sécurité', en: 'Follow plans and safety instructions' },
      { fr: 'Travailler en équipe sur le chantier', en: 'Work as part of the site team' },
    ],
    profile: [
      { fr: '2 ans minimum d\'expérience', en: '2 years minimum experience' },
      { fr: 'Disponibilité immédiate', en: 'Immediate availability' },
    ],
    contactPhone: '+2250709993347',
    status: 'published',
    updatedAt: '2026-09-10T09:00:00Z',
  },
  {
    id: 2,
    domain: { id: 4, labelFr: 'Logistique', labelEn: 'Logistics' },
    titleFr: 'Agents logistique & import',
    titleEn: 'Logistics & import agents',
    descriptionFr: "Rejoignez notre pôle logistique pour la gestion des flux d'importation de matériaux.",
    descriptionEn: 'Join our logistics team to manage material import flows.',
    metaFr: 'Abidjan · CDI · temps plein',
    metaEn: 'Abidjan · permanent contract · full-time',
    publishedAt: '2026-09-03',
    deadline: '2026-09-20',
    missions: [
      { fr: 'Suivre les commandes fournisseurs', en: 'Track supplier orders' },
      { fr: 'Coordonner le dédouanement', en: 'Coordinate customs clearance' },
    ],
    profile: [
      { fr: 'Formation logistique/transport', en: 'Logistics/transport background' },
      { fr: 'Rigueur et sens de l\'organisation', en: 'Rigorous and organised' },
    ],
    contactPhone: '+2250709993347',
    status: 'published',
    updatedAt: '2026-09-11T09:00:00Z',
  },
  {
    id: 3,
    domain: { id: 3, labelFr: 'Mobilité', labelEn: 'Mobility' },
    titleFr: 'Chauffeurs VTC',
    titleEn: 'Ride-hailing drivers',
    descriptionFr: 'Nous recrutons des chauffeurs professionnels pour notre service de mobilité.',
    descriptionEn: 'We are hiring professional drivers for our mobility service.',
    metaFr: 'Abidjan · CDD · temps plein',
    metaEn: 'Abidjan · fixed-term · full-time',
    publishedAt: '2026-08-20',
    deadline: '2026-09-18',
    missions: [
      { fr: 'Assurer les trajets clients', en: 'Handle client rides' },
      { fr: 'Entretenir le véhicule', en: 'Maintain the vehicle' },
    ],
    profile: [
      { fr: 'Permis B depuis 3 ans', en: 'Driving licence for 3+ years' },
    ],
    contactPhone: '+2250758601627',
    status: 'draft',
    updatedAt: '2026-09-07T09:00:00Z',
  },
  {
    id: 4,
    domain: { id: 5, labelFr: 'Support', labelEn: 'Support' },
    titleFr: 'Assistant(e) administratif(ve)',
    titleEn: 'Administrative assistant',
    descriptionFr: "Support administratif transverse pour les équipes chantier et siège.",
    descriptionEn: 'Cross-functional administrative support for site and head office teams.',
    metaFr: 'Abidjan · CDI · temps plein',
    metaEn: 'Abidjan · permanent · full-time',
    publishedAt: '2026-09-05',
    deadline: '2026-09-14',
    missions: [
      { fr: 'Gérer le courrier et les dossiers', en: 'Manage mail and files' },
      { fr: 'Assister les responsables de chantier', en: 'Assist site managers' },
    ],
    profile: [
      { fr: 'Bac+2 en administration', en: '2-year admin degree' },
    ],
    contactPhone: '+2250778095858',
    status: 'published',
    updatedAt: '2026-09-06T09:00:00Z',
  },
];
