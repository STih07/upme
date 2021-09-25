import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGenerationComponent } from './link-generation.component';

describe('LinkGenerationComponent', () => {
  let component: LinkGenerationComponent;
  let fixture: ComponentFixture<LinkGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
