import { TestBed } from '@angular/core/testing';

import { WelcomeTemporaryService } from './welcome-temporary.service';

describe('WelcomeTemporaryService', () => {
  let service: WelcomeTemporaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeTemporaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
