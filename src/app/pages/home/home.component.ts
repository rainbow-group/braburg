import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as constants from '../../shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  // @ViewChild('three') three: ElementRef;

  images = constants.images.home;
  constructor() { }

  ngOnInit(): void {
  }

  goDistance(section): void {
    this[section].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
