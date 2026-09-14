import { Routes } from '@angular/router';
import { EcommerceComponent } from './domains/dashboard/presentation/pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './domains/dashboard/presentation/pages/profile/profile.component';
import { FormElementsComponent } from './domains/dashboard/presentation/pages/forms/form-elements/form-elements.component';
import { BasicTablesComponent } from './domains/dashboard/presentation/pages/tables/basic-tables/basic-tables.component';
import { BlankComponent } from './domains/dashboard/presentation/pages/blank/blank.component';
import { NotFoundComponent } from './domains/dashboard/presentation/pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { InvoicesComponent } from './domains/dashboard/presentation/pages/invoices/invoices.component';
import { LineChartComponent } from './domains/dashboard/presentation/pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './domains/dashboard/presentation/pages/charts/bar-chart/bar-chart.component';
import { AlertsComponent } from './domains/dashboard/presentation/pages/ui-elements/alerts/alerts.component';
import { AvatarElementComponent } from './domains/dashboard/presentation/pages/ui-elements/avatar-element/avatar-element.component';
import { BadgesComponent } from './domains/dashboard/presentation/pages/ui-elements/badges/badges.component';
import { ButtonsComponent } from './domains/dashboard/presentation/pages/ui-elements/buttons/buttons.component';
import { ImagesComponent } from './domains/dashboard/presentation/pages/ui-elements/images/images.component';
import { VideosComponent } from './domains/dashboard/presentation/pages/ui-elements/videos/videos.component';
import { SignInComponent } from './domains/auth/presentation/pages/sign-in/sign-in.component';
import { ActivationComponent } from './domains/auth/presentation/pages/activation/activation.component';
import { CalenderComponent } from './domains/dashboard/presentation/pages/calender/calender.component';
import { UsersListComponent } from './domains/user/presentation/pages/users-list/users-list.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    canActivate: [authGuard],
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:
          'Angular Ecommerce Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template',
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'Angular Calender | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'profile',
        component:ProfileComponent,
        title:'Angular Profile Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'form-elements',
        component:FormElementsComponent,
        title:'Angular Form Elements Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'basic-tables',
        component:BasicTablesComponent,
        title:'Angular Basic Tables Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'blank',
        component:BlankComponent,
        title:'Angular Blank Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      // support tickets
      {
        path:'invoice',
        component:InvoicesComponent,
        title:'Angular Invoice Details Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title:'Angular Line Chart Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title:'Angular Bar Chart Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'alerts',
        component:AlertsComponent,
        title:'Angular Alerts Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'avatars',
        component:AvatarElementComponent,
        title:'Angular Avatars Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'badge',
        component:BadgesComponent,
        title:'Angular Badges Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'buttons',
        component:ButtonsComponent,
        title:'Angular Buttons Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'images',
        component:ImagesComponent,
        title:'Angular Images Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'videos',
        component:VideosComponent,
        title:'Angular Videos Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
      },
      {
        path:'users',
        component:UsersListComponent,
        canActivate:[adminGuard],
        title:'Gestion des utilisateurs | ATHL-HABITAT&LOGISTIC'
      },
    ]
  },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title:'Connexion | ATHL-HABITAT&LOGISTIC'
  },
  {
    path:'activation',
    component:ActivationComponent,
    title:'Activation du compte | ATHL-HABITAT&LOGISTIC'
  },
  // error pages
  {
    path:'**',
    component:NotFoundComponent,
    title:'Angular NotFound Dashboard | ATHL-HABITAT&LOGISTIC - Angular Admin Dashboard Template'
  },
];
