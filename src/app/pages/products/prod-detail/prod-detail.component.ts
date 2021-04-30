import { Component, OnInit } from '@angular/core';
import {DbService} from '../../../shared/service/db.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.scss']
})
export class ProdDetailComponent implements OnInit {

  constructor(private dbService: DbService, public route: ActivatedRoute) {
  }
  prodImgBase = 'assets/images/prods';
  imgBase = 'assets/images';
  pid;
  prod;
  selectedTab = 1;
  ngOnInit(): void {
    this.route.params.subscribe((val: any) => {
      this.pid = val.prodId;
      this.loadDate();
    });
  }

  loadDate(): void {
    this.dbService.getProdByPid(this.pid).subscribe(prod => {
      this.prod = prod;console.info(this.prod)
    });
  }

  onImgError(e): void {
    if (e) {
      e.target.attributes.src.value = this.imgBase + '/nf.jpg';
    }
  }

}
