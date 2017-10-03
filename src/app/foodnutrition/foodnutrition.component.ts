import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-foodnutrition',
  templateUrl: './foodnutrition.component.html',
  styleUrls: ['./foodnutrition.component.css']
})
export class FoodnutritionComponent implements OnInit {
  // Pie
  // public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData: number[] = [300, 500, 100];
  // public pieChartType: string = 'pie';
   @Input() foodNutritionInfo: object;
  constructor() { }

  ngOnInit() {
    //console.log(this.foodNutritionInfo);
  }

}
