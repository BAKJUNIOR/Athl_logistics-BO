import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../components/common/page-breadcrumb/page-breadcrumb.component';
import { InvoiceSidebarComponent } from '../../components/invoice/invoice-sidebar/invoice-sidebar.component';
import { InvoiceMainComponent } from '../../components/invoice/invoice-main/invoice-main.component';

@Component({
  selector: 'app-invoices',
  imports: [
    PageBreadcrumbComponent,
    InvoiceSidebarComponent,
    InvoiceMainComponent
  ],
  templateUrl: './invoices.component.html',
  styles: ``
})
export class InvoicesComponent {

}
