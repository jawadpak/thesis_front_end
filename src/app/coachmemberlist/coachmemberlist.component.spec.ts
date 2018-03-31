import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachmemberlistComponent } from './coachmemberlist.component';

describe('CoachmemberlistComponent', () => {
  let component: CoachmemberlistComponent;
  let fixture: ComponentFixture<CoachmemberlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachmemberlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachmemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
