import { TestBed, inject } from '@angular/core/testing';

import { UserMealPlanService } from './user-meal-plan.service';

describe('UserMealPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMealPlanService]
    });
  });

  it('should be created', inject([UserMealPlanService], (service: UserMealPlanService) => {
    expect(service).toBeTruthy();
  }));
});
