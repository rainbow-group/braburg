import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProdDetailComponent} from './prod-detail/prod-detail.component';
import {ProdListComponent} from './prod-list/prod-list.component';

const routes: Routes = [{
    path: '',
    component: ProductsComponent,
    children: [

      {
        path: 'list/:cid', component: ProdListComponent
      },

      {
        path: 'detail/:prodId', component: ProdDetailComponent
      },
      {
        path: '**', component: ProdListComponent
      }
    ]
  }]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
