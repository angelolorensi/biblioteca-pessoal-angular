import { TestBed } from '@angular/core/testing';

import { DialogCommunicationService } from './dialog-communication.service';

describe('DialogCommunicationService', () => {
  let service: DialogCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
