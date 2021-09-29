import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaApuestasComponent } from './casa-apuestas.component';

describe('CasaApuestasComponent', () => {
  let component: CasaApuestasComponent;
  let fixture: ComponentFixture<CasaApuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaApuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
