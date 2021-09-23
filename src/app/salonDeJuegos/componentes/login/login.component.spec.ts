import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGamesComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginGamesComponent;
  let fixture: ComponentFixture<LoginGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
