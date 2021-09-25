import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationStepComponent } from './motivation-step.component';

describe('MotivationStepComponent', () => {
  let component: MotivationStepComponent;
  let fixture: ComponentFixture<MotivationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
