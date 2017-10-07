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
  public water: number = 0;
  public waterMsg: string = "00";
  public sleep: number = 0;
  public sleepMsg: string = "00";
  constructor(private getApiDataService: GetApiDataService) { }
  // Pie
  // public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData: number[] = [300, 500, 100];
  // public pieChartType: string = 'pie';
 //public date:Date = new Date("09/27/2017");
 date;
  ngOnInit() {
    this.date = new Date("09/27/2017");
    this.getApiDataService.getPostData("users/dailyPlan.json", { "user_id": 4, "plan_date": "2017-09-27" })
      .subscribe(
      res => {
        this.userMealPlanResult = _.map(res.user_meal_plan, function(userMealPlan) {
          return new UserMealPlan(userMealPlan);
        });
      }
      );
  }

  public calculateWater(val: number): void {

    if (this.water == 0 && val == 1) {
      this.water = this.water + val;
    } else if (this.water >= 1 && this.water < 30) {
      this.water = this.water + val;
    }
    else if (this.water == 30 && val == -1) {
      this.water = this.water + val;
    }
    this.waterMsg = ("0" + this.water).slice(-2);
  }

  public calculateSleep(val: number): void {

    if (this.sleep == 0 && val == 1) {
      this.sleep = this.sleep + val;
    } else if (this.sleep >= 1 && this.sleep < 16) {
      this.sleep = this.sleep + val;
    }
    else if (this.sleep == 16 && val == -1) {
      this.sleep = this.sleep + val;
    }
    this.sleepMsg = ("0" + this.sleep).slice(-2);
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
