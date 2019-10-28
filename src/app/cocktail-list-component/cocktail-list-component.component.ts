import { CocktailService } from './../service/cocktail.service';
import { Cocktail } from './../../models/cocktail';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})

export class CocktailListComponentComponent implements OnInit {
  public cocktails: Cocktail[];
  public service: CocktailService;

  constructor(public param_service: CocktailService) {
    this.service = param_service;
  }

  public ngOnInit(): void {
    this.service.getCocktails().subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }
}
