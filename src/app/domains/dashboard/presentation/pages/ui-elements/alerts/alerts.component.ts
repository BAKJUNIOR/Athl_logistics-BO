import { Component } from '@angular/core';
import { AlertComponent } from '../../../../../../shared/ui/alert/alert.component';
import { ComponentCardComponent } from '../../../components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';

@Component({
  selector: 'app-alerts',
  imports: [
    AlertComponent,
    ComponentCardComponent,
    PageBreadcrumbComponent,
  ],
  templateUrl: './alerts.component.html',
  styles: ``
})
export class AlertsComponent {

}
