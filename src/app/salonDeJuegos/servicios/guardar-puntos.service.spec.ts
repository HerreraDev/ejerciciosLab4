import { TestBed } from '@angular/core/testing';

import { GuardarPuntosService } from './guardar-puntos.service';

describe('GuardarPuntosService', () => {
  let service: GuardarPuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarPuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
