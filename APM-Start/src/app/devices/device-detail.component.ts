import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDevice } from './device';
@Component({
  
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  pageTitle: string = 'Device Details';
  device: IDevice;

  constructor( private route: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.device={
      "deviceId": 1,
    "deviceName": "iPhone 6",
      "deviceCode": "ASSET 0010",
      "deviceOS": "iOS",
      "deviceStatus": "Available",
      "product": "WebSDK",
      "deviceRating": 4.8,
      "imageUrl": "assets/images/iphone6.jpg"
  
    }
  }
  onBack(): void{
    this.router.navigate(['/devices']);
  }

}
