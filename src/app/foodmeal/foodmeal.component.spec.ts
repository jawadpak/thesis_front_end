import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmealComponent } from './foodmeal.component';

describe('FoodmealComponent', () => {
  let component: FoodmealComponent;
  let fixture: ComponentFixture<FoodmealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
