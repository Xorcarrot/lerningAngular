import { delay } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customCode',
  templateUrl: './customCode.component.html',
  styleUrls: ['./customCode.component.css'],
  animations: [
    trigger('open', [
      state('left', style({
        transform: 'translateX(-100%) rotateY(180deg)'
      })),
      state('right', style({
        transform: 'translateX(0%) rotateY(0deg)'
      })),
      transition('left <=> right', [
        animate(3000)
      ])
    ])
  ]
})
export class CustomCodeComponent implements OnInit {

  title: string = '<3customCode>';
  onContainer: boolean = false;

  constructor() { }

  ngOnInit() { 
  }

  toggle() {
    this.onContainer = true;
    delay(1000);
  }

  froggl() {
    this.onContainer = false;
    delay(1000);
  }

}
