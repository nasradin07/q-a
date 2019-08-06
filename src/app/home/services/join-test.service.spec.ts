import { TestBed } from '@angular/core/testing';

import { JoinTestService } from './join-test.service';

describe('JoinTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinTestService = TestBed.get(JoinTestService);
    expect(service).toBeTruthy();
  });
});
