import { Injectable } from '@angular/core';
import { Sensor } from './sensor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private url: string = 'api/sensors';

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.url);
  }
}
