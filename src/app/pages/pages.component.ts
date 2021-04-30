import { Component, OnInit } from '@angular/core';
import * as constants from '../shared/constants';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  images = constants.images.pages;
  constructor() { }

  ngOnInit(): void {
  }

}
