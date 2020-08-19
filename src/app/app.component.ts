import { Component, OnInit } from '@angular/core';
import { Sensor } from './sensor';
import { SensorService } from './sensor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sensors: Sensor[] = [];

  constructor(private sensorService: SensorService) {}

  ngOnInit() {
    this.getSensors();
  }

  getSensors(): void {
    this.sensorService.getSensorData()
      .subscribe(sensors => this.sensors = sensors.slice(0, 10));
  }
}
