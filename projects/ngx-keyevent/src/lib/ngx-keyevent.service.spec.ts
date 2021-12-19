import { TestBed } from '@angular/core/testing';

import { NgxKeyeventService } from './ngx-keyevent.service';

describe('NgxKeyeventService', () => {
  let service: NgxKeyeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKeyeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
