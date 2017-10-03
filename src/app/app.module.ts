import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,MatGridListModule,MatIconModule,MatMenuModule} from '@angular/material';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { FoodmealComponent } from './foodmeal/foodmeal.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionComponent,
    FoodmealComponent,

  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MdButtonModule, MdCheckboxModule, HttpClientModule,HttpModule,MatGridListModule,MatIconModule,MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
