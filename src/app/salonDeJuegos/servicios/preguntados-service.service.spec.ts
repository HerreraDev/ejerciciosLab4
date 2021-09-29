import { TestBed } from '@angular/core/testing';

import { PreguntadosServiceService } from './preguntados-service.service';

describe('PreguntadosServiceService', () => {
  let service: PreguntadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
