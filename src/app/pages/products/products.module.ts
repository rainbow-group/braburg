import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    ProductsComponent,
    ProdDetailComponent,
    ProdListComponent
  ],
    imports: [
      ProductsRoutingModule,
      CommonModule,
      MatToolbarModule,
      FlexModule,
      MatMenuModule,
      MatButtonModule,
      MatListModule,
      MatDialogModule,
      RouterModule,
      MatTabsModule
    ]
})
export class ProductsModule { }
