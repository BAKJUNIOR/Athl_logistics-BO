/**
 * Reprend le `JobDomain` du front (domains/vitrine/domain/enum/job-domain.enum.ts) :
 * mêmes valeurs, mais les libellés vivent ici côté BO pour l'affichage admin.
 */
export type JobDomain = 'chantier' | 'second-oeuvre' | 'mobilite' | 'logistique' | 'support';

export const JOB_DOMAINS: JobDomain[] = ['chantier', 'second-oeuvre', 'mobilite', 'logistique', 'support'];

export function jobDomainLabel(domain: JobDomain): string {
  switch (domain) {
    case 'chantier':
      return 'Chantier';
    case 'second-oeuvre':
      return 'Second œuvre';
    case 'mobilite':
      return 'Mobilité';
    case 'logistique':
      return 'Logistique';
    case 'support':
      return 'Support';
  }
}

export type JobStatus = 'draft' | 'published';

export function jobStatusLabel(status: JobStatus): string {
  return status === 'published' ? 'Publiée' : 'Brouillon';
}

export type JobDeadlineStatus = 'open' | 'soon' | 'over';

export function daysUntilDeadline(deadline: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(deadline);
  end.setHours(0, 0, 0, 0);
  return Math.round((end.getTime() - today.getTime()) / 86_400_000);
}

export function deadlineStatus(deadline: string): JobDeadlineStatus {
  const days = daysUntilDeadline(deadline);
  if (days < 0) return 'over';
  if (days <= 7) return 'soon';
  return 'open';
}

/** Une puce de liste (mission ou critère de profil), dupliquée par langue. */
export interface JobBullet {
  fr: string;
  en: string;
}

/**
 * Reprend les champs attendus par `JobOffer` côté Athl_logistics-front, avec les textes
 * dupliqués par langue (titleFr/titleEn...) au lieu des deux tableaux JOB_OFFERS_FR/EN
 * du front. `status` (draft/published) est propre au BO : le site ne doit afficher que
 * les offres `published`, `deadlineStatus` (open/soon/over) reste calculé à l'affichage,
 * jamais stocké.
 */
export interface JobOffer {
  id: number;
  domain: JobDomain;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  metaFr: string;
  metaEn: string;
  publishedAt: string;
  deadline: string;
  missions: JobBullet[];
  profile: JobBullet[];
  contactPhone: string;
  status: JobStatus;
  updatedAt: string;
}

export type JobUpsertRequest = Omit<JobOffer, 'id' | 'updatedAt'>;

export function emptyBullet(): JobBullet {
  return { fr: '', en: '' };
}

export function emptyJobForm(): JobUpsertRequest {
  const today = new Date().toISOString().slice(0, 10);
  return {
    domain: 'chantier',
    titleFr: '',
    titleEn: '',
    descriptionFr: '',
    descriptionEn: '',
    metaFr: '',
    metaEn: '',
    publishedAt: today,
    deadline: today,
    missions: [emptyBullet()],
    profile: [emptyBullet()],
    contactPhone: '',
    status: 'draft',
  };
}
