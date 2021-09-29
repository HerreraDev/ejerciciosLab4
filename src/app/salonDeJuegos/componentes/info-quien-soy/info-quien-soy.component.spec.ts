import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoQuienSoyComponent } from './info-quien-soy.component';

describe('InfoQuienSoyComponent', () => {
  let component: InfoQuienSoyComponent;
  let fixture: ComponentFixture<InfoQuienSoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoQuienSoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoQuienSoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
