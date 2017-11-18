import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  autoTicks = true;
   disabled = false;
   invert = false;
   max = 10000;
   min = 0;
   showTicks = true;
   step = 100;
   thumbLabel = true;
   value = 0;
   vertical = false;

   max1 = 30;
   step1=1;
  value1 = 0;
  constructor() { }

  ngOnInit() {

  }
  //changed. now with parameter


}
