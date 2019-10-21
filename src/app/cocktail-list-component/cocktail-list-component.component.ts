import { Cocktail } from './../../models/cocktail';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent implements OnInit {
  cocktails: Cocktail[] = [
    {name: 'Blue Lagoon',
    price: 7,
    img: 'https://assets.afcdn.com/recipe/20190222/88136_w420h344c1cx2736cy1824cxt0cyt0cxb5466cyb3641.jpg'
    }, {name: 'Strawberry Tequila',
    price: 6.5,
    img: 'https://kitchenswagger.com/wp-content/uploads/2015/11/strawberry-cucumber-cocktail2.jpg'},
    {name: 'Blue Lagoon',
    price: 7,
    img: 'https://assets.afcdn.com/recipe/20190222/88136_w420h344c1cx2736cy1824cxt0cyt0cxb5466cyb3641.jpg'
    }, {name: 'Strawberry Tequila',
    price: 6.5,
    img: 'https://kitchenswagger.com/wp-content/uploads/2015/11/strawberry-cucumber-cocktail2.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
