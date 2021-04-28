import { Component, OnInit } from '@angular/core';
import {DbService} from '../../shared/service/db.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private dbService: DbService) { }

  categories;
  selectedCategory;

  ngOnInit(): void {
    if (!this.selectedCategory){
      this.selectedCategory = 1;
    }
    this.dbService.getProdCategories().subscribe(response => {
      this.categories = response;
    });
  }

  selectCategory(item): void {
    if (item){
      this.selectedCategory = item.id;
    }
  }
}
