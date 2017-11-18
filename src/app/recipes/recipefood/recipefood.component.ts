import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../../services/api/get-api-data.service';

@Component({
  selector: 'app-recipefood',
  templateUrl: './recipefood.component.html',
  styleUrls: ['./recipefood.component.css'],
  providers: [GetApiDataService]
})
export class RecipefoodComponent implements OnInit {

  constructor(private getApiDataService: GetApiDataService) { }
  public recipes_list: object = [];
  public water: number = 0;

  ngOnInit() {
    this.getApiDataService.getData("users/getRecipeData.json", {})
      .subscribe(
      res => {
        this.recipes_list = res["recipes"];
        console.log("Recipe", this.recipes_list, res);
      });
  }

}
