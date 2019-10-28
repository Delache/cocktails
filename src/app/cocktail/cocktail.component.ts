import { CocktailListComponentComponent } from './../cocktail-list-component/cocktail-list-component.component';
import { Cocktail } from './../../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
  }
}
