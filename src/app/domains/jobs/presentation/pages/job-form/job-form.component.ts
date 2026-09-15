import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PageBreadcrumbComponent } from '../../../../dashboard/presentation/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../../dashboard/presentation/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../../../shared/ui/badge/badge.component';
import { ButtonComponent } from '../../../../../shared/ui/button/button.component';
import { LabelComponent } from '../../../../dashboard/presentation/components/form/label/label.component';
import { InputFieldComponent } from '../../../../dashboard/presentation/components/form/input/input-field.component';
import { TextAreaComponent } from '../../../../dashboard/presentation/components/form/input/text-area.component';
import { SwitchComponent } from '../../../../dashboard/presentation/components/form/input/switch.component';
import { SelectComponent, Option } from '../../../../dashboard/presentation/components/form/select/select.component';
import { DatePickerComponent } from '../../../../dashboard/presentation/components/form/date-picker/date-picker.component';
import { JobApi } from '../../../infrastructure/api/job.api';
import {
  JOB_DOMAINS,
  JobBullet,
  JobUpsertRequest,
  emptyBullet,
  emptyJobForm,
  jobDomainLabel,
  jobStatusLabel,
} from '../../../domain/entities/job-offer.entity';
import { ToastService } from '../../../../../core/services/toast.service';
import { extractApiErrorMessage } from '../../../../../core/utils/api-error.util';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [
    RouterModule,
    PageBreadcrumbComponent,
    ComponentCardComponent,
    BadgeComponent,
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
    TextAreaComponent,
    SwitchComponent,
    SelectComponent,
    DatePickerComponent,
  ],
  templateUrl: './job-form.component.html',
})
export class JobFormComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly jobApi = inject(JobApi);
  private readonly toast = inject(ToastService);

  readonly jobId = this.resolveId();
  readonly isEdit = this.jobId !== null;

  loading = signal(this.isEdit);
  loadError = signal<string | null>(null);

  saving = signal(false);
  formError = signal<string | null>(null);
  submitAttempted = signal(false);

  form = signal<JobUpsertRequest>(emptyJobForm());

  readonly domainOptions: Option[] = JOB_DOMAINS.map((d) => ({ value: d, label: jobDomainLabel(d) }));
  domainLabel = jobDomainLabel;
  statusLabel = jobStatusLabel;

  constructor() {
    if (this.isEdit) {
      this.loadJob();
    }
  }

  private resolveId(): number | null {
    const raw = this.route.snapshot.paramMap.get('id');
    if (!raw) return null;
    const id = Number(raw);
    return Number.isFinite(id) ? id : null;
  }

  private loadJob(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.jobApi.getById(this.jobId!).subscribe({
      next: (job) => {
        const { id, updatedAt, ...rest } = job;
        this.form.set(rest);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.loadError.set(
          extractApiErrorMessage(
            err,
            "Impossible de charger cette offre : l'API backend correspondante n'existe pas encore."
          )
        );
        this.loading.set(false);
      },
    });
  }

  cancel(): void {
    if (this.saving()) return;
    this.router.navigateByUrl('/jobs');
  }

  updateForm<K extends keyof JobUpsertRequest>(field: K, value: JobUpsertRequest[K]): void {
    this.form.update((f) => ({ ...f, [field]: value }));
  }

  onStatusChange(published: boolean): void {
    this.updateForm('status', published ? 'published' : 'draft');
  }

  onPublishedAtChange(dateStr: string): void {
    this.updateForm('publishedAt', dateStr);
  }

  onDeadlineChange(dateStr: string): void {
    this.updateForm('deadline', dateStr);
  }

  // Missions
  addMission(): void {
    this.form.update((f) => ({ ...f, missions: [...f.missions, emptyBullet()] }));
  }

  removeMission(index: number): void {
    this.form.update((f) => ({ ...f, missions: f.missions.filter((_, i) => i !== index) }));
  }

  updateMission(index: number, field: keyof JobBullet, value: string): void {
    this.form.update((f) => ({
      ...f,
      missions: f.missions.map((m, i) => (i === index ? { ...m, [field]: value } : m)),
    }));
  }

  // Profil recherché
  addProfileItem(): void {
    this.form.update((f) => ({ ...f, profile: [...f.profile, emptyBullet()] }));
  }

  removeProfileItem(index: number): void {
    this.form.update((f) => ({ ...f, profile: f.profile.filter((_, i) => i !== index) }));
  }

  updateProfileItem(index: number, field: keyof JobBullet, value: string): void {
    this.form.update((f) => ({
      ...f,
      profile: f.profile.map((p, i) => (i === index ? { ...p, [field]: value } : p)),
    }));
  }

  get titleFrMissing(): boolean {
    return this.submitAttempted() && !this.form().titleFr.trim();
  }

  get deadlineMissing(): boolean {
    return this.submitAttempted() && !this.form().deadline.trim();
  }

  submitForm(): void {
    this.submitAttempted.set(true);
    const f = this.form();
    if (!f.titleFr.trim() || !f.deadline.trim()) {
      this.formError.set("Le titre (FR) et la date de clôture sont obligatoires.");
      return;
    }
    this.formError.set(null);
    this.saving.set(true);

    const id = this.jobId;
    const request$ = id ? this.jobApi.update(id, f) : this.jobApi.create(f);

    request$.subscribe({
      next: () => {
        this.saving.set(false);
        this.toast.success(id ? 'Offre mise à jour.' : 'Offre créée.');
        this.router.navigateByUrl('/jobs');
      },
      error: (err: HttpErrorResponse) => {
        this.saving.set(false);
        this.formError.set(
          extractApiErrorMessage(
            err,
            "Erreur lors de l'enregistrement : l'API backend correspondante n'existe pas encore."
          )
        );
      },
    });
  }
}
