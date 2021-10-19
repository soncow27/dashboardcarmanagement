import { TestBed } from '@angular/core/testing';

import { ServiceXe } from './servicexe.service';

describe('ServiceXeService', () => {
  let service: ServiceXe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceXe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
