import { TestBed } from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('returns hardcoded sensor data', () => {
    expect(service.createDb().sensors.length).toBe(8240);
  });
});
