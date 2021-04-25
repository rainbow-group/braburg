import { Component, OnInit } from '@angular/core';
import * as constants from '../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = constants.images.home;
  constructor() { }

  ngOnInit(): void {
  }

}
