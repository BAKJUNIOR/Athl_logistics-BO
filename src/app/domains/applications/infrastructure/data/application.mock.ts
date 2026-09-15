import { JobApplication } from '../../domain/entities/job-application.entity';

/**
 * Données d'exemple affichées quand l'API `/api/v1/applications` n'existe pas encore
 * (voir applications-list.component.ts) — pour prévisualiser le rendu de la liste.
 * À retirer une fois le backend branché.
 */
export const MOCK_APPLICATIONS: JobApplication[] = [
  {
    id: 1,
    position: 'Maçons, coffreurs, ferrailleurs',
    name: 'Ibrahim Ouattara',
    phone: '+2250701234567',
    email: 'ibrahim.ouattara@example.com',
    experience: '2 à 5 ans',
    city: 'Abidjan',
    message: "J'ai travaillé 3 ans sur des chantiers résidentiels à Yamoussoukro.",
    cvUrl: 'cv-ibrahim-ouattara.pdf',
    status: 'new',
    receivedAt: '2026-09-13T09:30:00Z',
  },
  {
    id: 2,
    position: 'Agents logistique & import',
    name: 'Fatou Bamba',
    phone: '+2250789456123',
    email: '',
    experience: '5 à 10 ans',
    city: 'Abidjan',
    message: '',
    cvUrl: 'cv-fatou-bamba.pdf',
    status: 'in_progress',
    receivedAt: '2026-09-10T14:00:00Z',
  },
  {
    id: 3,
    position: 'Candidature spontanée',
    name: 'Marc Dibi',
    phone: '+2250700998877',
    email: 'marc.dibi@example.com',
    experience: 'Moins de 2 ans',
    city: 'Bouaké',
    message: 'Je suis motivé et disponible immédiatement.',
    cvUrl: 'cv-marc-dibi.pdf',
    status: 'done',
    receivedAt: '2026-09-02T11:00:00Z',
  },
];
