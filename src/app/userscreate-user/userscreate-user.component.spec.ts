import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscreateUserComponent } from './userscreate-user.component';

describe('UserscreateUserComponent', () => {
  let component: UserscreateUserComponent;
  let fixture: ComponentFixture<UserscreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserscreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
