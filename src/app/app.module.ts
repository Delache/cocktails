import { CocktailService } from './service/cocktail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HttpClient } from 'selenium-webdriver/http';
@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponentComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
