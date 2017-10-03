import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodnutritionComponent } from './foodnutrition.component';

describe('FoodnutritionComponent', () => {
  let component: FoodnutritionComponent;
  let fixture: ComponentFixture<FoodnutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodnutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
