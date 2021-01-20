import { Component, OnInit } from '@angular/core';
import { IDevice } from './device';
@Component({
  
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  pageTitle: string = 'Device Details';
  device: IDevice;

  constructor() { }

  ngOnInit(): void {
  }

}
