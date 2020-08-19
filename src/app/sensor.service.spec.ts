import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TestBed, inject, async } from '@angular/core/testing';
import { SensorService } from './sensor.service';

describe('SensorService', () => {
  class HttpClientStub {
    get() {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: HttpClientStub },
      ],
    });
  });

  it('retrieves list of sensor data from in-memory API',
    async(inject([SensorService, HttpClient], (service: SensorService, http: HttpClient) => {
      spyOn(http, 'get').and.returnValue(of([
        { id: '1', box_id: '1', unit: 'unit', range: 1, range_u: 1, longitude: 1, latitude: 1, reading: 1, reading_ts: '1', name: 'S1', sensor_type: 'CO2' },
      ]));

      service.getSensorData().subscribe(data => {
        expect(data[0].name).toBe('S1');
      });
  })));
});
