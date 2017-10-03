import { Component, OnInit,Input } from '@angular/core';
import { UserMealPlan } from '../services/classes/user-meal-plan';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-foodmeal',
  templateUrl: './foodmeal.component.html',
  styleUrls: ['./foodmeal.component.css'],

})
export class FoodmealComponent implements OnInit {
  @Input() userMealPlan: UserMealPlan;
  constructor() { }

  ngOnInit() {
    //console.log(this.userMealPlan);
  }

}
