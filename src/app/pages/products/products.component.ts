import {Component, OnInit} from '@angular/core';
import {DbService} from '../../shared/service/db.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private dbService: DbService, private router: Router) {
  }

  categories;
  selectedCategory;
  prodBasePath = '/app/products';

  ngOnInit(): void {
    this.dbService.getProdCategories().subscribe(response => {
      this.categories = response;
      if (!this.selectedCategory) {
        this.selectedCategory = 1;
      }

      this.router.navigate([this.prodBasePath, 'list', this.selectedCategory]);
    });
  }

  selectCategory(item): void {
    if (item) {
      this.selectedCategory = item.id;
    }
  }
}
