import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyStepComponent } from './study-step.component';

describe('StudyStepComponent', () => {
  let component: StudyStepComponent;
  let fixture: ComponentFixture<StudyStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
