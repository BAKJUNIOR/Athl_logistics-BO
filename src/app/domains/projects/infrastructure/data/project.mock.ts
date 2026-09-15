import { Project } from '../../domain/entities/project.entity';

/** Données d'exemple tant que `/api/v1/projects` n'existe pas côté backend (voir projects-list.component.ts). */
export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    titleFr: 'Villa contemporaine',
    titleEn: 'Contemporary villa',
    captionFr: 'Construction neuve — Abidjan',
    captionEn: 'New build — Abidjan',
    image: '',
    featured: true,
    wide: true,
    status: 'published',
    updatedAt: '2026-09-10T09:00:00Z',
  },
  {
    id: 2,
    titleFr: 'Résidence Les Palmiers',
    titleEn: 'Les Palmiers residence',
    captionFr: 'Immeuble R+4 — Cocody',
    captionEn: '4-storey building — Cocody',
    image: '',
    featured: true,
    wide: false,
    status: 'published',
    updatedAt: '2026-09-08T09:00:00Z',
  },
  {
    id: 3,
    titleFr: 'Entrepôt logistique',
    titleEn: 'Logistics warehouse',
    captionFr: 'Aménagement — Yopougon',
    captionEn: 'Fit-out — Yopougon',
    image: '',
    featured: false,
    wide: false,
    status: 'draft',
    updatedAt: '2026-09-04T09:00:00Z',
  },
];
