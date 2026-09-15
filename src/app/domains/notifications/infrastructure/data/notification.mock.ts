import { AppNotification } from '../../domain/entities/notification.entity';

/**
 * Données d'exemple tant qu'il n'existe pas d'endpoint de notifications côté backend.
 * Reprend les mêmes noms que les mocks de domains/quotes et domains/applications pour
 * rester cohérent — mêmes personnes, mêmes demandes, vues cette fois comme des
 * notifications plutôt que comme des lignes de boîte de réception.
 */
export const MOCK_NOTIFICATIONS: AppNotification[] = [
  {
    id: 1,
    category: 'quote',
    title: 'Nouvelle demande de devis',
    message: 'Yao Kouassi a demandé un devis pour « Réalisation de projets de construction ».',
    createdAt: '2026-09-15T09:40:00Z',
    read: false,
    path: '/quotes',
  },
  {
    id: 2,
    category: 'application',
    title: 'Nouvelle candidature',
    message: 'Ibrahim Ouattara a postulé pour « Maçons, coffreurs, ferrailleurs ».',
    createdAt: '2026-09-15T08:15:00Z',
    read: false,
    path: '/applications',
  },
  {
    id: 3,
    category: 'system',
    title: 'Compte activé',
    message: 'Le compte de Beugre Alain a été activé avec succès.',
    createdAt: '2026-09-15T07:05:00Z',
    read: false,
    path: '/users',
  },
  {
    id: 4,
    category: 'quote',
    title: 'Nouvelle demande de devis',
    message: 'Aïcha Traoré a demandé un devis pour « Rénovation & aménagement ».',
    createdAt: '2026-09-14T16:20:00Z',
    read: true,
    path: '/quotes',
  },
  {
    id: 5,
    category: 'content',
    title: 'Offre bientôt clôturée',
    message: 'L’offre « Chauffeurs VTC » clôture dans 3 jours.',
    createdAt: '2026-09-14T11:00:00Z',
    read: true,
    path: '/jobs',
  },
  {
    id: 6,
    category: 'application',
    title: 'Nouvelle candidature',
    message: 'Fatou Bamba a postulé pour « Agents logistique & import ».',
    createdAt: '2026-09-13T14:30:00Z',
    read: true,
    path: '/applications',
  },
  {
    id: 7,
    category: 'content',
    title: 'Service publié',
    message: 'Le service « VTC, mobilité & livraison » est maintenant visible sur le site.',
    createdAt: '2026-09-12T10:00:00Z',
    read: true,
    path: '/services',
  },
  {
    id: 8,
    category: 'system',
    title: 'Nouvel utilisateur du BO',
    message: 'Un compte administrateur a été créé pour l’équipe RH.',
    createdAt: '2026-09-10T09:00:00Z',
    read: true,
    path: '/users',
  },
];
