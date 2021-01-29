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
      "deviceId": id,
      "deviceName": "Garden Cart",
      "deviceCode": "GDN-0023",
      "deviceOS": "15 gallon capacity rolling garden cart",
      "deviceStatus": 32.99,
      "deviceRating": 4.3,
      "imageUrl": "assets/images/garden_cart.png"
    }
  }
  onBack(): void{
    this.router.navigate(['/devices']);
  }

}
