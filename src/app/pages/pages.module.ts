import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatToolbarModule,
    FlexModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule
  ]
})
export class PagesModule { }
