import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktailName: string;
  @Input() cocktailPrice: number;
  @Input() cocktailImg: string;
  constructor() { }

  ngOnInit() {
  }

}
