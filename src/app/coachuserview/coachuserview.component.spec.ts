import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachuserviewComponent } from './coachuserview.component';

describe('CoachuserviewComponent', () => {
  let component: CoachuserviewComponent;
  let fixture: ComponentFixture<CoachuserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachuserviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachuserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
