import { trigger, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informatiker',
  templateUrl: './informatiker.component.html',
  styleUrls: ['./informatiker.component.css'],
  animations: [
    trigger('pokemonR', [
      transition(':leave', [
        animate(10000, style({
          right: '100vw',
          overflow: 'hidden'
        }))
      ])
    ]),

    trigger('pokemonL', [
      transition(':leave', [
        animate(10000, style({
          right: '-5vw',
          overflow: 'hidden'
        }))
      ])
    ])
  ]
})
export class InformatikerComponent implements OnInit {

  row: string[] = [];
  sendOne: boolean = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.randomPokemon(0)
    }, 1500);
    setInterval(() => {
      this.randomPokemon(1)
    }, 1500);
    setInterval(() => {
      this.randomPokemon(2)
    }, 1500);
    setInterval(() => {
      this.send();
    }, 750);
  }

  randomPokemonNumber(): number {
    return Math.floor(Math.random() * 899);
  }

  send(): void {
    this.sendOne = !this.sendOne;
  }

  randomPokemon(id: number): void {
    var x = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + Math.floor(Math.random() * 898 + 1) + '.png';
    this.row[id] = x;
  }

}
