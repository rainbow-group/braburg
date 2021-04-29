import {Component, OnInit} from '@angular/core';
import {DbService} from '../../shared/service/db.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private dbService: DbService) {
  }

  categories;
  selectedCategory;
  productRepo;
  prodImgBase = 'assets/images/prods';
  imgBase = 'assets/images';

  ngOnInit(): void {
    if (!this.selectedCategory) {
      this.selectedCategory = 2;
    }
    this.dbService.getProdCategories().subscribe(response => {
      this.categories = response;
      if (this.categories) {
        this.productRepo = {};

        for (const item of this.categories) {
          if (item) {
            this.productRepo[item.id] = void (0);
          }
        }
        this.loadDate();
      }
    });
  }

  loadDate(): void {
    if (!this.productRepo[this.selectedCategory]) {
      this.dbService.getProdListByCategory(this.selectedCategory).subscribe(prods => {
        this.productRepo[this.selectedCategory] = prods;
      });
    }
  }

  selectCategory(item): void {
    if (item) {
      this.selectedCategory = item.id;
      this.loadDate();
    }
  }

  showProd(prod): void {
    if (prod) {
      console.info(prod);
    }
  }

  onImgError(e): void {
    if (e) {
      e.target.attributes.src.value = this.imgBase + '/nf.jpg';
    }
  }
}
