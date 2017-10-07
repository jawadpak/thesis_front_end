import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.css']
})
export class PersoncardComponent implements OnInit {
  @Input() title: string;
  @Input() nutritionInfo: any;
  // Pie
  /*public pieChartLabels: string[] = ['Protein', 'FAT', 'Carbohydrate', 'Energy', 'Water', 'Iron'];
  public pieChartType: string = 'pie';*/
  public pieChartData: any = [];

  constructor() { }

  public chart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      margin: [15, 15, 15, 15]
    },

    title: {
      text: 'Food Nutrition Info'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        }
      }
    }
  });

  ngOnInit() {
    //this.pieChartData = _.values(this.nutritionInfo);

    //  public pieChartLabels: string[] = ['', '', 'Carbohydrate', 'Energy', 'Water', 'Iron'];
    this.pieChartData = _.mapKeys(this.nutritionInfo, function(value: string, key: string) {
      //console.log(value, key);
      let nut_name = "";
      if (key == "P203")
        nut_name = "Protein";
      else if (key == "P204")
        nut_name = "FAT";
      else if (key == "P205")
        nut_name = "Carbohydrate";
      else if (key == "P208")
        nut_name = "Energy";
      else if (key == "P255")
        nut_name = "Water";
      else if (key == "P303")
        nut_name = "Iron";
      return nut_name;
    });

    let temp_data = [];
    this.pieChartData = _.map(this.pieChartData, function(value, key) {
      return { name: key, y: value }
    });
    this.pieChartData.shift();
    this.chart.addSerie({
      data: this.pieChartData
    });

    //this.chart.ref.redraw();

  }

}
