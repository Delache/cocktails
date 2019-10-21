import { CocktailService } from './../service/cocktail.service';
import { Cocktail } from './../../models/cocktail';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})

export class CocktailListComponentComponent implements OnInit {
  cocktails: any[];
  constructor(public cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
