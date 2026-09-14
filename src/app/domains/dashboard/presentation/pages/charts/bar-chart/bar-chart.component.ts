
import { Component } from '@angular/core';
import { BarChartOneComponent } from '../../../components/charts/bar/bar-chart-one/bar-chart-one.component';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../components/common/component-card/component-card.component';

@Component({
  selector: 'app-bar-chart',
  imports: [
    ComponentCardComponent,
    PageBreadcrumbComponent,
    BarChartOneComponent
],
  templateUrl: './bar-chart.component.html',
  styles: ``
})
export class BarChartComponent {

}
