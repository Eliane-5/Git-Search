import { TestBed } from '@angular/core/testing';

import { GitRequestService } from './git-request.service';

describe('GitRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitRequestService = TestBed.get(GitRequestService);
    expect(service).toBeTruthy();
  });
});
