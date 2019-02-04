import { TestBed } from '@angular/core/testing';

import { JumpRunService } from './jump-run.service';

describe('JumpRunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JumpRunService = TestBed.get(JumpRunService);
    expect(service).toBeTruthy();
  });
});
