import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaResultadosComponent } from './encuesta-resultados.component';

describe('EncuestaResultadosComponent', () => {
  let component: EncuestaResultadosComponent;
  let fixture: ComponentFixture<EncuestaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
