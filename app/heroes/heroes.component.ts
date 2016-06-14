import {Component, OnInit} from '@angular/core';
import {HeroDetailComponent} from '../heroDetail/hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{

    constructor(private heroService: HeroService, private router: Router){}
    selectedHero: Hero;
    //Exposes HEROES to be available for binding
    public heroes: Hero[];
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        //this.heroes = this.heroService.getHeroes();
        //this.heroService.getHeroes().then(function(heroes) {
        //   this.heroes = heroes;
        //});

        //Can also write with a arrow function
         this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    //Initializes data from a service call, requires implementing OnInit
    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
