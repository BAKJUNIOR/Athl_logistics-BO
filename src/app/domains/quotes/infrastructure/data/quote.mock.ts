import { QuoteRequest } from '../../domain/entities/quote-request.entity';

/**
 * Données d'exemple affichées quand l'API `/api/v1/quotes` n'existe pas encore
 * (voir quotes-list.component.ts) — pour prévisualiser le rendu de la liste.
 * À retirer une fois le backend branché.
 */
export const MOCK_QUOTES: QuoteRequest[] = [
  {
    id: 1,
    serviceLabel: 'Réalisation de projets de construction',
    name: 'Yao Kouassi',
    phone: '+2250701020304',
    description: "Bonjour, je souhaite construire une villa R+1 sur un terrain de 500 m² à Cocody. Pouvez-vous me faire une estimation ?",
    attachments: [],
    status: 'new',
    receivedAt: '2026-09-14T10:20:00Z',
  },
  {
    id: 2,
    serviceLabel: 'Rénovation & aménagement',
    name: 'Aïcha Traoré',
    phone: '+2250709112233',
    description: 'Je voudrais rénover la cuisine et la salle de bain de mon appartement.',
    attachments: ['plan-appartement.pdf'],
    status: 'in_progress',
    receivedAt: '2026-09-12T15:45:00Z',
  },
  {
    id: 3,
    serviceLabel: 'Importation de matériaux',
    name: 'Jean-Marc Koffi',
    phone: '+2250777889900',
    description: 'Besoin de carrelage et de sanitaires importés pour un chantier de 12 logements.',
    attachments: [],
    status: 'done',
    receivedAt: '2026-09-05T08:00:00Z',
  },
];
