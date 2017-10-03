import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../services/api/get-api-data.service';
import { UserMealPlan } from '../services/classes/user-meal-plan';
import * as _ from 'lodash';
@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css'],
  providers: [GetApiDataService]

})

export class NutritionComponent implements OnInit {
  public userMealPlanResult: UserMealPlan[];
  constructor(private getApiDataService: GetApiDataService) { }
  // Pie
  // public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData: number[] = [300, 500, 100];
  // public pieChartType: string = 'pie';

  ngOnInit() {
    this.getApiDataService.getPostData("users/dailyPlan.json", { "user_id": 4, "plan_date": "2017-09-27" })
    .subscribe(
      res => {
        this.userMealPlanResult = _.map(res.user_meal_plan, function(userMealPlan) {
          return new UserMealPlan(userMealPlan);
        });
      }
    );
  }

  // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }
  //
  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

}
