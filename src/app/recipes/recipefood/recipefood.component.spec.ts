import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipefoodComponent } from './recipefood.component';

describe('RecipefoodComponent', () => {
  let component: RecipefoodComponent;
  let fixture: ComponentFixture<RecipefoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipefoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
