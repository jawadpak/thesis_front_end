export class UserMealPlan {
  id: number;
  user_id: number;
  user_plan_id: number;
  meal_id: number;
  meal_name: string;
  meal_item_id: number;
  tracked: boolean;
  meal_item: object;
  water: number = 0;
  constructor(data: any) {

    this.id = data.id;
    this.user_id = data.user_id;
    this.user_plan_id = data.user_plan_id;
    this.meal_id = data.meal_id;
    this.meal_name = data.meal_name;
    this.meal_item_id = data.meal_item_id;
    this.tracked = data.tracked;
    this.meal_item = data.meal_item;

  }

  /*constructor(mealPlanObj: IUserMealPlan) {
      this.mealPlan = mealPlanObj;
  }*/


}
