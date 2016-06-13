import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id){
        return this.getHeroes().then(function(heroes){
            function filterId(hero) {
                return hero.id === id;
            }
            return heroes.filter(filterId);
        });
    }
}
