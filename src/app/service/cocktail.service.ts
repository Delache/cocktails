import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './../../models/cocktail';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private service: HttpClient;
  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getCocktails(): Observable<Cocktail[]> {
    return this.service
      .get('assets/cocktails.json')
      .pipe(map(this.jasonToCocktail));
  }

  private jasonToCocktail(cocktails: any[]): Cocktail[] {
    return cocktails.map((cocktail) => {
      return new Cocktail(cocktail);
    });
  }
}
