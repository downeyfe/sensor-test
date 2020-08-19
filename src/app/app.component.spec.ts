import { TestBed, ComponentFixture, async, inject, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Sensor } from './sensor';
import { SensorService } from './sensor.service';

describe('AppComponent', () => {
  class SensorServiceSub {
    getSensorData() {}
  }

  let fixture: ComponentFixture<AppComponent>;
  let mockData: Sensor[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: SensorService, useClass: SensorServiceSub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    mockData = [
      { id: '1', box_id: '1', unit: 'unit', range: 1, range_u: 1, longitude: 1, latitude: 1, reading: 1, reading_ts: '1', name: 'S1', sensor_type: 'CO2' },
      { id: '2', box_id: '2', unit: 'unit', range: 2, range_u: 2, longitude: 2, latitude: 2, reading: 2, reading_ts: '2', name: 'S2', sensor_type: 'CO2' },
      { id: '3', box_id: '3', unit: 'unit', range: 3, range_u: 3, longitude: 3, latitude: 3, reading: 3, reading_ts: '3', name: 'S3', sensor_type: 'CO2' },
      { id: '4', box_id: '4', unit: 'unit', range: 4, range_u: 4, longitude: 4, latitude: 4, reading: 4, reading_ts: '4', name: 'S4', sensor_type: 'CO2' },
      { id: '5', box_id: '5', unit: 'unit', range: 5, range_u: 5, longitude: 5, latitude: 5, reading: 5, reading_ts: '5', name: 'S5', sensor_type: 'CO2' },
      { id: '6', box_id: '6', unit: 'unit', range: 6, range_u: 6, longitude: 6, latitude: 6, reading: 6, reading_ts: '6', name: 'S6', sensor_type: 'CO2' },
      { id: '7', box_id: '7', unit: 'unit', range: 7, range_u: 7, longitude: 7, latitude: 7, reading: 7, reading_ts: '7', name: 'S7', sensor_type: 'CO2' },
      { id: '8', box_id: '8', unit: 'unit', range: 8, range_u: 8, longitude: 8, latitude: 8, reading: 8, reading_ts: '8', name: 'S8', sensor_type: 'CO2' },
      { id: '9', box_id: '9', unit: 'unit', range: 9, range_u: 9, longitude: 9, latitude: 9, reading: 9, reading_ts: '9', name: 'S9', sensor_type: 'CO2' },
      { id: '10', box_id: '10', unit: 'unit', range: 10, range_u: 10, longitude: 10, latitude: 10, reading: 10, reading_ts: '10', name: 'S10', sensor_type: 'CO2' },
      { id: '11', box_id: '11', unit: 'unit', range: 11, range_u: 11, longitude: 11, latitude: 11, reading: 11, reading_ts: '11', name: 'S11', sensor_type: 'CO2' },
    ]
  }));

  it('fetches list of sensor data and renders basic info for first 10 sensors',
    fakeAsync(inject([SensorService], (sensorService: SensorService) => {
      spyOn(sensorService, 'getSensorData').and.returnValue(of(mockData));

      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('li').length).toBe(10);
      expect(compiled.querySelector('li').textContent.trim()).toBe('S1, CO2, 1');
      expect(sensorService.getSensorData).toHaveBeenCalled();
    })));
});
