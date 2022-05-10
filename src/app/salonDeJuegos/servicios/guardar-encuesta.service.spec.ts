import { TestBed } from '@angular/core/testing';

import { GuardarEncuestaService } from './guardar-encuesta.service';

describe('GuardarEncuestaService', () => {
  let service: GuardarEncuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarEncuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
