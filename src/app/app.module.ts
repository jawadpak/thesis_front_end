import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MatGridListModule, MatIconModule, MatMenuModule, MatSlideToggleModule, MatExpansionModule, MatDatepickerModule, MdDatepicker,NativeDateAdapter,MdNativeDateModule,MatSidenavModule,MatSliderModule  } from '@angular/material';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { AsideModule}     from 'ng2-aside';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { FoodmealComponent } from './foodmeal/foodmeal.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { FoodnutritionComponent } from './foodnutrition/foodnutrition.component';
import { MealcolumnchartComponent } from './mealcolumnchart/mealcolumnchart.component';
import { AddFoodMealComponent } from './add-food-meal/add-food-meal.component';
import { ExercisedataComponent } from './fitness/exercisedata/exercisedata.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { ChatComponent } from './message/chat/chat.component';
import { RecipefoodComponent } from './recipes/recipefood/recipefood.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { CoachmemberlistComponent } from './coachmemberlist/coachmemberlist.component';



@NgModule({
  declarations: [
    AppComponent,
    NutritionComponent,
    FoodmealComponent,
    PersoncardComponent,
    FoodnutritionComponent,
    MealcolumnchartComponent,
    AddFoodMealComponent,
    ExercisedataComponent,
    MainpageComponent,
    ChatComponent,
    RecipefoodComponent,
    CreateRecipeComponent,
    CoachmemberlistComponent,
  ],
  exports:[MdDatepicker,MatSidenavModule],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, HttpClientModule, HttpModule, MatGridListModule, MatIconModule, MatMenuModule, ChartModule, ChartsModule, MatSlideToggleModule,MatSliderModule, MatExpansionModule,MatDatepickerModule,MdNativeDateModule,FormsModule,RouterModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
