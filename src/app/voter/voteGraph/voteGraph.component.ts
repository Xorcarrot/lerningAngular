import { VoteServiceService } from './../service/VoteService.service';
import { delay } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Vote } from './../model/vote';
import { Component, Input, OnInit } from '@angular/core';
import { VoterComponent } from '../voter.component';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-voteGraph',
  templateUrl: './voteGraph.component.html',
  styleUrls: ['./voteGraph.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({height: 0}),
        animate(3000)
      ]),
      transition(':leave', [
        animate(0, style({
          opacity: 0
        }))
      ])
    ]),

    trigger('rise', [
      transition(':enter', [
        style({height: 0}),
        animate(10000)
      ]),
      transition(':leave', [
        animate(300, style({
          opacity: 0
        }))
      ])
    ]),

    trigger('kusch', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(1000)
      ]),
      transition(':leave', [
        animate(1000, style({
          opacity: 0
        }))
      ])
    ]),

    trigger('back', [
      state('with', style({
        backgroundColor: 'rgba(0, 11, 41, 0)',
        transform: 'scale(2)'
      })),
      state('without', style({
        backgroundColor: 'rgba(0, 11, 141, 0.8)',
        tranform: 'scale(1)'
      })),
      transition('with => without', [
        animate(500)
      ]),
      transition('without => with', [
        animate(200)
      ])
    ])
  ]
})
export class VoteGraphComponent implements OnInit {

  seasons: String[] = ['Frühling', 'Sommer', 'Herbst', 'Winter'];
  @Input() votes: Vote[] = [];
  hights: number[] = [];

  voteHolder: Vote[] = [{
    season: 'Frühling',
    comment: 'Nocheiner'
  }, {
    season: 'Sommer',
    comment: 'Heiß'
  }, {
    season: 'Herbst',
    comment: 'Ein Seltener'
  }, {
    season: 'Winter',
    comment: 'Brrrrr!'
  }];

  disapear: boolean = true;

  springHo: boolean = false;
  summerHo: boolean = false;
  autumnHo: boolean = false;
  winterHo: boolean = false;

  constructor(private voteService: VoteServiceService) { 
  }

  ngOnInit() {

  }

  countVotes(seasonsNumber: number): number {
    var x = 0;
    for(var i = 0; i<this.votes.length; i++) {
      if(this.votes[i].season == this.seasons[seasonsNumber]) {
        x++;
      }
    }
    return x;
  }

  saveVoter(index: number): void {
    this.voteService.save(this.voteHolder[index]).subscribe();
    this.disapear = false;
    this.load();
  }

  calcHigh(): number[] {
    var high = [];
    var spring = this.countVotes(0);
    var summer = this.countVotes(1);
    var autumn = this.countVotes(2);
    var winter = this.countVotes(3);
    var votesTotal = spring + summer + autumn + winter;
    spring = votesTotal / spring;
    summer = votesTotal / summer;
    autumn = votesTotal / autumn;
    winter = votesTotal / winter;
    high.push(Math.round(100/spring) * 2);
    high.push(Math.round(100/summer) * 2);
    high.push(Math.round(100/autumn) * 2);
    high.push(Math.round(100/winter) * 2);
    return high;
  }

  load(): void {
    this.hights = this.calcHigh();
  }

  hoverSpringOn(): void {
    this.springHo = true;
    delay(400);
  }

  hoverSpringOff(): void {
    this.springHo = false;
    delay(200);
  }

  hoverSummerOn(): void {
    this.summerHo = true;
    delay(400);
  }

  hoverSummerOff(): void {
    this.summerHo = false;
    delay(200);
  }

  hoverAutumnOn(): void {
    this.autumnHo = true;
    delay(400);
  }

  hoverAutumnOff(): void {
    this.autumnHo = false;
    delay(200);
  }

  hoverWinterOn(): void {
    this.winterHo = true;
    delay(400);
  }

  hoverWinterOff(): void {
    this.winterHo = false;
    delay(200);
  }

}
