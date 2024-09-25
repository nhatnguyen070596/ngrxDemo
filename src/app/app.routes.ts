import { Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent  },
    { path: 'schedules', component: ProductListComponent  },
    { path: 'orders', component: OrderListComponent },
    { path: '', redirectTo: '/schedules', pathMatch: 'full' }, // Default route redirecting to products
    { path: '**', redirectTo: '/schedules' }, // Wildcard route redirecting to products
];