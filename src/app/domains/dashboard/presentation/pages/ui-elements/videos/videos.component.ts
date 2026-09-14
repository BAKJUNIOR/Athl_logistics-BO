import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../components/common/component-card/component-card.component';
// import { AspectRatioVideoComponent } from '../../../../../../shared/ui/videos/aspect-ratio-video/aspect-ratio-video.component';
import { SixteenIstoNineComponent } from '../../../../../../shared/ui/videos/sixteen-isto-nine/sixteen-isto-nine.component';
import { FourIstoThreeComponent } from '../../../../../../shared/ui/videos/four-isto-three/four-isto-three.component';
import { OneIstoOneComponent } from '../../../../../../shared/ui/videos/one-isto-one/one-isto-one.component';
import { TwentyoneIstoNineComponent } from "../../../../../../shared/ui/videos/twentyone-isto-nine/twentyone-isto-nine.component";

@Component({
  selector: 'app-videos',
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    // AspectRatioVideoComponent,
    SixteenIstoNineComponent,
    FourIstoThreeComponent,
    OneIstoOneComponent,
    TwentyoneIstoNineComponent
],
  templateUrl: './videos.component.html',
  styles: ``
})
export class VideosComponent {

}
