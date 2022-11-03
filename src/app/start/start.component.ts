import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [

    trigger('textswithing', [
      state('inMiddle', style({
        opacity: 1,
        transform: 'translateY(0%)',
      })),
      transition('* => void', [
        animate(1000, style({
          transform: 'translateY(70px)',
          opacity: 0,
        }))
      ]),
      transition('void => *', [
        style({
          transform: 'translateY(-70px)',
          opacity: 0
        }),
        animate(1000)
      ])
    ]),

    trigger('heartbeat', [
      state('big', style({
        backgroundSize: '70vh',
      })),
      state('small', style({
        backgroundSize: '60vh',
      })),
      transition('big <=> small', [
        animate(2000)
      ])
    ])
  ]
})

export class StartComponent implements OnInit {

  heartBeating: boolean = true;
  welcomeText: string = '';
  startTexts: string[] = [];
  indexText: number = 0;

  constructor() { 
    this.startTexts.push("patrick@pusswald.me");
    this.startTexts.push("Hey, Wilkommen bei mir!");
    this.startTexts.push("Patrick Pußwald");
  }

  ngOnInit() {
    this.switchingText();
    setInterval(() => {
      this.switchingText();
    }, 5000);
    setInterval(() => {
      this.toggle();
    }, 2000)
  }

  switchingText(): void {
    this.welcomeText = this.startTexts[this.indexText];
    if(this.indexText > 1) {
      this.indexText = 0;
    } else {
      this.indexText++;
    }
  }

  toggle() {
    this.heartBeating = !this.heartBeating;
  }

}
