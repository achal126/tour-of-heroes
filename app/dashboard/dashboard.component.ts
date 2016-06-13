import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponet implements OnInit{

    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router){}

    ngOnInit() {
        //Using this here makes this undefined
       // this.heroService.getHeroes().then(function(heroes) {
       //    this.heroes = heroes.slice(1, 5);
       // });

        //REMEMBER THE ARROW FUNCTION FIXES THE THIS ISSUE
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero){
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link);
    }
}