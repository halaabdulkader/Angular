import { Component, OnInit } from '@angular/core';
import { IDevice } from './device';
@Component({
  selector: 'pm-devices',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  
  pageTitle: string = 'Devices List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  devices: IDevice[] = [
    {

      "deviceName": "Leaf Rake",
      "deviceCode": "GDN-0011",

      "deviceOS": "Leaf rake with 48-inch wooden handle.",
      "deviceStatus": 19.95,

      "imageUrl": "assets/images/leaf_rake.png"
    },
    {

      "deviceName": "Garden Cart",
      "deviceCode": "GDN-0023",

      "deviceOS": "15 gallon capacity rolling garden cart",
      "deviceStatus": 32.99,

      "imageUrl": "assets/images/garden_cart.png"
    },
    {

      "deviceName": "Hammer",
      "deviceCode": "TBX-0048",

      "deviceOS": "Curved claw steel hammer",
      "deviceStatus": 8.9,

      "imageUrl": "assets/images/hammer.png"
    }];
  toggleImage(): void {
    this.showImage = !this.showImage;
  };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}