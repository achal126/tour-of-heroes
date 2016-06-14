import {Component, Input, OnInit} from '@angular/core';

import {Hero} from '../heroes/hero';
import {HeroService} from '../heroes/hero.service';
import {RouteParams} from '@angular/router-deprecated';


@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/heroDetail/hero-detail.component.html',
    styleUrls: ['app/heroDetail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    constructor(private heroService: HeroService, private routeParams: RouteParams){}

    @Input()
    hero: Hero;

    ngOnInit(){
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}
