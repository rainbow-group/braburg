import {Component, Input, OnInit} from '@angular/core';
import {DbService} from '../../../shared/service/db.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {
  prodList;
  prodImgBase = 'assets/images/prods';
  imgBase = 'assets/images';
  prodDetailPath = '/app/products/detail';
  cid;

  constructor(private dbService: DbService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((val: any) => {
      this.cid = val.cid;
      this.loadDate();
    });
  }

  loadDate(): void {
    this.dbService.getProdListByCategory(this.cid).subscribe(prods => {
      this.prodList = prods;
    });
  }

  onImgError(e): void {
    if (e) {
      e.target.attributes.src.value = this.imgBase + '/nf.jpg';
    }
  }

}
