import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.css']
})
export class PersoncardComponent implements OnInit {
  @Input() title: string;
  @Input() nutritionInfo: object;
  // Pie
  public pieChartLabels: string[] = ['Protein', 'FAT', 'Carbohydrate', 'Energy', 'Water', 'Iron'];
  public pieChartData = [];
  public pieChartType: string = 'pie';
  constructor() { }

  ngOnInit() {
    this.pieChartData = _.values(this.nutritionInfo);
    this.pieChartData.shift();


  }

}
