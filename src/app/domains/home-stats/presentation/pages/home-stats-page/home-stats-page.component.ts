import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PageBreadcrumbComponent } from '../../../../dashboard/presentation/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../../dashboard/presentation/components/common/component-card/component-card.component';
import { ButtonComponent } from '../../../../../shared/ui/button/button.component';
import { LabelComponent } from '../../../../dashboard/presentation/components/form/label/label.component';
import { InputFieldComponent } from '../../../../dashboard/presentation/components/form/input/input-field.component';
import { HomeStatsApi } from '../../../infrastructure/api/home-stats.api';
import { HOME_STAT_DEFAULTS, HomeStat } from '../../../domain/entities/home-stat.entity';
import { ToastService } from '../../../../../core/services/toast.service';
import { extractApiErrorMessage } from '../../../../../core/utils/api-error.util';

@Component({
  selector: 'app-home-stats-page',
  standalone: true,
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
  ],
  templateUrl: './home-stats-page.component.html',
})
export class HomeStatsPageComponent {
  private readonly homeStatsApi = inject(HomeStatsApi);
  private readonly toast = inject(ToastService);

  loading = signal(true);
  usingMockData = signal(false);
  saving = signal(false);

  stats = signal<HomeStat[]>(HOME_STAT_DEFAULTS);

  constructor() {
    this.loadStats();
  }

  loadStats(): void {
    this.loading.set(true);
    this.usingMockData.set(false);
    this.homeStatsApi.list().subscribe({
      next: (list) => {
        this.stats.set(list?.length ? list : HOME_STAT_DEFAULTS);
        this.loading.set(false);
      },
      error: () => {
        this.stats.set(HOME_STAT_DEFAULTS);
        this.usingMockData.set(true);
        this.loading.set(false);
      },
    });
  }

  updateStat(index: number, field: 'value' | 'decimals' | 'suffix', value: number | string): void {
    this.stats.update((list) =>
      list.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  }

  save(): void {
    this.saving.set(true);
    this.homeStatsApi.update(this.stats()).subscribe({
      next: () => {
        this.saving.set(false);
        this.toast.success('Chiffres clés mis à jour.');
      },
      error: (err: HttpErrorResponse) => {
        this.saving.set(false);
        this.toast.error(
          extractApiErrorMessage(err, "Erreur lors de l'enregistrement : l'API backend correspondante n'existe pas encore.")
        );
      },
    });
  }
}
