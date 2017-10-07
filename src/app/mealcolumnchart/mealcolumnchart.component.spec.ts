import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealcolumnchartComponent } from './mealcolumnchart.component';

describe('MealcolumnchartComponent', () => {
  let component: MealcolumnchartComponent;
  let fixture: ComponentFixture<MealcolumnchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealcolumnchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealcolumnchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
