import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodMealComponent } from './add-food-meal.component';

describe('AddFoodMealComponent', () => {
  let component: AddFoodMealComponent;
  let fixture: ComponentFixture<AddFoodMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
