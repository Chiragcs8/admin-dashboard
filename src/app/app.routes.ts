import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
