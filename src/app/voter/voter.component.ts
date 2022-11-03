import { VoteServiceService } from './service/VoteService.service';
import { Vote } from './model/vote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  votes: Vote[] = [];

  constructor(private voteService: VoteServiceService) { }

  ngOnInit() {
    this.voteService.findAll().subscribe(data => {
      this.votes = data;
    });
  }

}
