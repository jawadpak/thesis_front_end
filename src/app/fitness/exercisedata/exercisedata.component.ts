import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-exercisedata',
  templateUrl: './exercisedata.component.html',
  styleUrls: ['./exercisedata.component.css']
})
export class ExercisedataComponent implements OnInit {

  public chart = new Chart({
    chart: {
      type: 'column',
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,

    },
    plotOptions: {
      column: {
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 1,
        zones: [{
          value: 8000, // Values up to 10 (not including) ...
          color: 'Yellow', // ... have the color blue.


        }, {
          color: 'green' // Values from 10 (including) and up have the color red
        }]
      }
    },
    title:{
      text:"Daily Step"
    },
    xAxis: {
      categories: [
        'Sat 9/8',
        'Sun 9/9',
        'Mon 9/10',
        'Thu 9/11',
        'Wed 9/12',
        'Thu 9/13',
        'Fri 9/14'

      ],
      crosshair: true
    },


    series: [{

      type: 'column',
      //    name: 'Jane',
      data: [8692, 8113, 2090, 4898, 7274, 8220, 9300]
    },
    {
      type: 'line',
      //    name: 'Joe',
      data: [7000, 7000, 7500, 9000, 10000, 10000, 10000],

    }]
  });
  public chart1 = new Chart({
    chart: {
      type: 'column',
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,

    },
    plotOptions: {
      column: {
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 1,
        zones: [{
          value: 300, // Values up to 10 (not including) ...
          color: 'Yellow', // ... have the color blue.


        }, {
          color: 'green' // Values from 10 (including) and up have the color red
        }]
      }
    },
    title:{
      text:"Daily Exercise"
    },
    xAxis: {
      categories: [
        'Swim',
        'Run',
        'Jodo',
        'Jump',
        'Bowling',
        'Skining',
        'Golf'

      ],
      crosshair: true
    },


    series: [{

      type: 'column',
      //    name: 'Jane',
      data: [692, 113, 90, 898, 274, 220, 300]
    },
    {
      type: 'line',
      //    name: 'Joe',
      data: [500, 300, 200, 900, 300, 100, 100]

    }]
  });

  constructor() { }

  ngOnInit() {
  }

}
