import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
  animations: [
    trigger('hover', [
      state('over', style({
        fontSize: '30px',
        backgroundColor: 'white',
        color: '#D70026',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '4px'
      })),
      state('away', style({
        
      })),
      transition('away => over', [
        animate(700)
      ]),
      transition('over => away', [
        animate(400)
      ])
    ])
  ]
})

export class NavigationbarComponent implements OnInit {

  naviElements = [{
    name: 'Home',
    url: 'platzhalter',
    hover: false
  }, {
    name: 'Über mich',
    url: 'platzhalter',
    hover: false
  }, {
    name: 'Kontak',
    url: 'platzhalter',
    hover: false
  }, {
    name: 'Technik',
    url: 'platzhalter',
    hover: false
  }];

  constructor() { 

  }

  ngOnInit() {
  }

  mouseOver(index: number) {
    this.naviElements[index].hover = true;
  }

  mouseAway(index: number) {
    this.naviElements[index].hover = false;
  }

}