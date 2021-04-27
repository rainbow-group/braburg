import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {MatListModule} from '@angular/material/list';
import {PagesRoutingModule} from '../pages-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ProductsComponent
  ],
    imports: [
      ProductsRoutingModule,
      CommonModule,
      MatToolbarModule,
      FlexModule,
      MatMenuModule,
      MatButtonModule,
      MatListModule
    ]
})
export class ProductsModule { }
