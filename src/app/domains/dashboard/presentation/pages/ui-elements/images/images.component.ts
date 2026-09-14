import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../components/common/component-card/component-card.component';
import { ResponsiveImageComponent } from '../../../../../../shared/ui/images/responsive-image/responsive-image.component';
import { ThreeColumnImageGridComponent } from '../../../../../../shared/ui/images/three-column-image-grid/three-column-image-grid.component';
import { TwoColumnImageGridComponent } from '../../../../../../shared/ui/images/two-column-image-grid/two-column-image-grid.component';

@Component({
  selector: 'app-images',
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    ResponsiveImageComponent,
    ThreeColumnImageGridComponent,
    TwoColumnImageGridComponent,
  ],
  templateUrl: './images.component.html',
  styles: ``
})
export class ImagesComponent {

}
