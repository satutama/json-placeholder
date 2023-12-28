import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import testing module
import { JsonPlaceholderService } from './json-placeholder.service';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JsonPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
