import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MatGridListModule, MatIconModule, MatMenuModule } from '@angular/material';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { FoodmealComponent } from './foodmeal/foodmeal.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { FoodnutritionComponent } from './foodnutrition/foodnutrition.component';



@NgModule({
  declarations: [
    AppComponent,
    NutritionComponent,
    FoodmealComponent,
    PersoncardComponent,
    FoodnutritionComponent,

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, HttpClientModule, HttpModule, MatGridListModule, MatIconModule, MatMenuModule, ChartModule,ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
