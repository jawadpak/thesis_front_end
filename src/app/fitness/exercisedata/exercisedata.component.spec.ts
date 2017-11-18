import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisedataComponent } from './exercisedata.component';

describe('ExercisedataComponent', () => {
  let component: ExercisedataComponent;
  let fixture: ComponentFixture<ExercisedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
