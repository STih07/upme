import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoStepComponent } from './logo-step.component';

describe('LogoStepComponent', () => {
  let component: LogoStepComponent;
  let fixture: ComponentFixture<LogoStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
