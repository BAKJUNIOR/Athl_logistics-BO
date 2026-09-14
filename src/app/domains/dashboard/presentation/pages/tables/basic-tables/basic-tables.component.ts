import { Component } from '@angular/core';
import { ComponentCardComponent } from '../../../components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';
import { BasicTableOneComponent } from '../../../components/tables/basic-tables/basic-table-one/basic-table-one.component';
import { BasicTableTwoComponent } from '../../../components/tables/basic-tables/basic-table-two/basic-table-two.component';
import { BasicTableThreeComponent } from '../../../components/tables/basic-tables/basic-table-three/basic-table-three.component';
import { BasicTableFourComponent } from '../../../components/tables/basic-tables/basic-table-four/basic-table-four.component';
import { BasicTableFiveComponent } from '../../../components/tables/basic-tables/basic-table-five/basic-table-five.component';

@Component({
  selector: 'app-basic-tables',
  imports: [
    ComponentCardComponent,
    PageBreadcrumbComponent,
    BasicTableOneComponent,
    BasicTableTwoComponent,
    BasicTableThreeComponent,
    BasicTableFourComponent,
    BasicTableFiveComponent,
  ],
  templateUrl: './basic-tables.component.html',
  styles: ``
})
export class BasicTablesComponent {

}
