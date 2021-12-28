import { Component, OnInit } from '@angular/core';
import { hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: hero = {
    id: 1,
    name: 'Homem Aranha',

  };
  constructor() { }

  ngOnInit(): void {
  }

}
