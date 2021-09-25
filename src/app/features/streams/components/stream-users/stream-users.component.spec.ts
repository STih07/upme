import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamUsersComponent } from './stream-users.component';

describe('StreamUsersComponent', () => {
  let component: StreamUsersComponent;
  let fixture: ComponentFixture<StreamUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
