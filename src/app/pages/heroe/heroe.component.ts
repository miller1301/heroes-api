import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeResponse } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeResponse[] | any = [];
  id!: number;

  constructor( 
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private location: Location ) { 

    this.activatedRoute.params.subscribe( params => {
      this.id = parseInt(params.id);
    })
            
  }

  ngOnInit(): void {
      this.heroesService.getHeroe(this.id).subscribe( res => {
      this.heroe = res;
    })
  }

  back(){
    this.location.back();
  }

}
