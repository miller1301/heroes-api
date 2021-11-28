import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeResponse } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeResponse[] = [];
  heroesAleatorios: HeroeResponse[] = [];

  constructor( private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {

    this.heroesService.getHeroes().subscribe( res => {
    this.heroes = res;
    this.heroesAleatorios = this.heroesRandom( this.heroes );
    });

  }

  // Get 20 Heroes randomly
  heroesRandom( heroes: HeroeResponse[] ){
      return [...this.heroes]
          .sort( () => Math.random() > 0.5 ? 1 : -1 )
          .slice(0, 20)
  }

  // See page of heroe
  verHeroe(id: number){
    this.heroesService.getHeroe(id).subscribe( res => {
      this.router.navigateByUrl(`heroe/${id}`);
    })
  }

}
