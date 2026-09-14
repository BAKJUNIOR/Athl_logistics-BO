// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-recent-orders',
//   imports: [CommonModule],
//   templateUrl: './recent-orders.component.html',
//   styleUrl: './recent-orders.component.css'
// })
// export class RecentOrdersComponent {

// }



import { Component } from '@angular/core';
// import { TableComponent } from '../../../../../../shared/ui/table/table.component';
// import { TableBodyComponent } from '../../../../../../shared/ui/table/table-body.component';
// import { TableCellComponent } from '../../../../../../shared/ui/table/table-cell.component';
// import { TableHeaderComponent } from '../../../../../../shared/ui/table/table-header.component';
// import { TableRowComponent } from '../../../../../../shared/ui/table/table-row.component';
import { BadgeComponent } from '../../../../../../shared/ui/badge/badge.component';

interface Product {
  id: number;
  name: string;
  variants: string;
  category: string;
  price: string;
  image: string;
  status: 'Livré' | 'En attente' | 'Annulé';
}

@Component({
  selector: 'app-recent-orders',
  imports: [
    BadgeComponent
],
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent {
  tableData: Product[] = [
    {
      id: 1,
      name: "MacBook Pro 13”",
      variants: "2 variantes",
      category: "Ordinateur portable",
      price: "2399,00 $",
      status: "Livré",
      image: "/images/product/product-01.jpg",
    },
    {
      id: 2,
      name: "Apple Watch Ultra",
      variants: "1 variante",
      category: "Montre",
      price: "879,00 $",
      status: "En attente",
      image: "/images/product/product-02.jpg",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      variants: "2 variantes",
      category: "Smartphone",
      price: "1869,00 $",
      status: "Livré",
      image: "/images/product/product-03.jpg",
    },
    {
      id: 4,
      name: "iPad Pro 3rd Gen",
      variants: "2 variantes",
      category: "Électronique",
      price: "1699,00 $",
      status: "Annulé",
      image: "/images/product/product-04.jpg",
    },
    {
      id: 5,
      name: "AirPods Pro 2nd Gen",
      variants: "1 variante",
      category: "Accessoires",
      price: "240,00 $",
      status: "Livré",
      image: "/images/product/product-05.jpg",
    },
  ];

  getBadgeColor(status: string): 'success' | 'warning' | 'error' {
    if (status === 'Livré') return 'success';
    if (status === 'En attente') return 'warning';
    return 'error';
  }
}