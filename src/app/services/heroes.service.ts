import { Injectable } from '@angular/core';

// Module HTTP
import { HttpClient } from '@angular/common/http';
import { HeroeResponse } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Base URL API
  private baseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

  constructor( private http: HttpClient ) { }

  // Get all Heroes
  getHeroes(){
    return this.http.get<HeroeResponse[]>(`${this.baseUrl}/all.json`);
  }

  // Get one Heroe
  getHeroe( id: number ){
    return this.http.get<HeroeResponse[]>(`${this.baseUrl}/id/${id}.json`);
  }

}
