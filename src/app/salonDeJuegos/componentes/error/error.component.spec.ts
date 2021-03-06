import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorGamesComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorGamesComponent;
  let fixture: ComponentFixture<ErrorGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
