import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeResponse } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes: HeroeResponse[] = [];
  text = '';
  heroesFound: HeroeResponse[] = [];

  constructor( private activatedRoute: ActivatedRoute,
              private heroesServices: HeroesService,
              private router: Router ) { }

  ngOnInit(): void {

    this.heroesServices.getHeroes().subscribe( res => {
      this.heroes = res;
      this.searchHeroes(this.text);
    });

    this.activatedRoute.params.subscribe( params => {
      this.text = params.texto;
    })

    
  }

  searchHeroes( texto: string ): HeroeResponse[]{
    texto = texto.toLowerCase();

    for (const heroe of this.heroes) {
      let nombre = heroe.name.toLowerCase();
      if(nombre.indexOf(texto) >= 0){
        this.heroesFound.push(heroe);
      }
    }
    return this.heroesFound;

  }

   // See page of heroe
   verHeroe(id: number){
    this.heroesServices.getHeroe(id).subscribe( res => {
      this.router.navigateByUrl(`heroe/${id}`);
    })
  }

  back(){
    this.router.navigateByUrl('/heroes');
  }

}
