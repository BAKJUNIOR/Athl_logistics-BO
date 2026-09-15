import { TeamMember } from '../../domain/entities/team-member.entity';

/** Données d'exemple tant que `/api/v1/team` n'existe pas côté backend (voir team-list.component.ts). */
export const MOCK_TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Emmanuel N’GUESSAN',
    roleFr: 'Directeur Général Group',
    roleEn: 'Group Chief Executive Officer',
    photo: '',
    sortOrder: 1,
    updatedAt: '2026-09-01T09:00:00Z',
  },
  {
    id: 2,
    name: 'Aïcha Koné',
    roleFr: 'Directrice des opérations',
    roleEn: 'Chief Operating Officer',
    photo: '',
    sortOrder: 2,
    updatedAt: '2026-09-01T09:00:00Z',
  },
  {
    id: 3,
    name: 'Serge Yao',
    roleFr: 'Directeur technique',
    roleEn: 'Chief Technical Officer',
    photo: '',
    sortOrder: 3,
    updatedAt: '2026-09-01T09:00:00Z',
  },
];
