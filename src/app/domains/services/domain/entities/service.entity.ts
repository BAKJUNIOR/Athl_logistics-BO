export type ServiceStatus = 'draft' | 'published';

export interface ServicePrestation {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
}

export interface ServiceProcessStep {
  number: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
}

/**
 * Reprend les champs attendus par `Service` côté Athl_logistics-front
 * (domains/vitrine/domain/service.entity.ts), avec les textes dupliqués par langue
 * (titleFr/titleEn...) au lieu des deux tableaux SERVICES_FR/SERVICES_EN du front :
 * un seul enregistrement à éditer ici, le front choisit le bon champ selon sa langue
 * active. `status` pilote la visibilité publique — le site ne doit afficher que les
 * services `published` (un `draft` reste visible et modifiable uniquement dans le BO).
 */
export interface Service {
  id: number;
  slug: string;
  number: string;
  titleFr: string;
  titleEn: string;
  shortTitleFr: string;
  shortTitleEn: string;
  leadFr: string;
  leadEn: string;
  image: string;
  heroImage: string;
  gallery: string[];
  prestations: ServicePrestation[];
  process: ServiceProcessStep[];
  status: ServiceStatus;
  updatedAt: string;
}

export type ServiceUpsertRequest = Omit<Service, 'id' | 'updatedAt'>;

export function serviceStatusLabel(status: ServiceStatus): string {
  return status === 'published' ? 'Publié' : 'Brouillon';
}

export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}

export function emptyPrestation(): ServicePrestation {
  return { titleFr: '', titleEn: '', descriptionFr: '', descriptionEn: '' };
}

export function emptyProcessStep(order: number): ServiceProcessStep {
  return {
    number: String(order).padStart(2, '0'),
    titleFr: '',
    titleEn: '',
    descriptionFr: '',
    descriptionEn: '',
  };
}

export function emptyServiceForm(): ServiceUpsertRequest {
  return {
    slug: '',
    number: '01',
    titleFr: '',
    titleEn: '',
    shortTitleFr: '',
    shortTitleEn: '',
    leadFr: '',
    leadEn: '',
    image: '',
    heroImage: '',
    gallery: [],
    prestations: [emptyPrestation()],
    process: [emptyProcessStep(1)],
    status: 'draft',
  };
}
