import { Component, OnInit,Input } from '@angular/core';
import { UserMealPlan } from '../services/classes/user-meal-plan';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-mealcolumnchart',
  templateUrl: './mealcolumnchart.component.html',
  styleUrls: ['./mealcolumnchart.component.css']
})
export class MealcolumnchartComponent implements OnInit {
  @Input() userMealPlan: any;

  constructor() { }
  public chart = new Chart({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Daily Meal Plan Calories'
    },
    subtitle: {
        text: 'Source: USDA Data Base'
    },
    xAxis: {
        categories: [
            'Breakfast',
            'A.M Snack',
            'Lunch',
            'P.M Snack',
            'Dinner',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Calories (kal)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Suggested Food Calories',
        data: [600, 300, 600, 300, 600]
    }]
});

  ngOnInit() {
  this.chart.addSerie({
      name: 'Current Food Calories',
      data: _.map(this.userMealPlan,function(foodPlan:any){
        return Math.floor( foodPlan.meal_item.meal_item_nutrient.P203*4+foodPlan.meal_item.meal_item_nutrient.P204*9+foodPlan.meal_item.meal_item_nutrient.P205*4);
      })
    });
  }

}
