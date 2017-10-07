import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MatGridListModule, MatIconModule, MatMenuModule, MatSlideToggleModule, MatExpansionModule, MatDatepickerModule, MdDatepicker,NativeDateAdapter,MdNativeDateModule,MatSidenavModule  } from '@angular/material';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { AsideModule}     from 'ng2-aside';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { FoodmealComponent } from './foodmeal/foodmeal.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { FoodnutritionComponent } from './foodnutrition/foodnutrition.component';
import { MealcolumnchartComponent } from './mealcolumnchart/mealcolumnchart.component';
import { AddFoodMealComponent } from './add-food-meal/add-food-meal.component';



@NgModule({
  declarations: [
    AppComponent,
    NutritionComponent,
    FoodmealComponent,
    PersoncardComponent,
    FoodnutritionComponent,
    MealcolumnchartComponent,
    AddFoodMealComponent,
  ],
  exports:[MdDatepicker,MatSidenavModule],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, HttpClientModule, HttpModule, MatGridListModule, MatIconModule, MatMenuModule, ChartModule, ChartsModule, MatSlideToggleModule, MatExpansionModule,MatDatepickerModule,MdNativeDateModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
