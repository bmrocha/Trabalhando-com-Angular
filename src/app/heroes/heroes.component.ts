import { Component} from '@angular/core';
import { hero } from '../hero.model';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
 hero: hero = {
    id: 1,
    name: 'Homem Aranha',
  };
  heroes = HEROES;
}
