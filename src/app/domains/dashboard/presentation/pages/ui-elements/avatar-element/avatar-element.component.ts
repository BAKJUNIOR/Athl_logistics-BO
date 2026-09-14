import { Component } from '@angular/core';
import { AvatarComponent } from '../../../../../../shared/ui/avatar/avatar.component';
import { ComponentCardComponent } from '../../../components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';

@Component({
  selector: 'app-avatar-element',
  imports: [
    AvatarComponent,
    ComponentCardComponent,
    PageBreadcrumbComponent
  ],
  templateUrl: './avatar-element.component.html',
  styles: ``
})
export class AvatarElementComponent {

}
