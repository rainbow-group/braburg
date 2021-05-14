import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    },
    {
      path: 'products',
      loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    },
    {
      path: 'join',
      loadChildren: () => import('./join/join.module').then(m => m.JoinModule),
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    },
    {
      path: '**',
      redirectTo: 'products'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
