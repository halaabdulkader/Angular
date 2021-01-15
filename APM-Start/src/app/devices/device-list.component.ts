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
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value:string){
	  this._listFilter=value;
	  this.filteredDevices = this.listFilter ? this.performFilter(this.listFilter) : this.devices;
  }

  filteredDevices: IDevice[];



  devices: IDevice[] = [
    {

      "deviceName": "Leaf Rake",
      "deviceCode": "GDN-0011",

      "deviceOS": "Leaf rake with 48-inch wooden handle.",
	  "deviceStatus": 19.95,
	  "deviceRating": 4.8,

      "imageUrl": "assets/images/leaf_rake.png"
    },
    {

      "deviceName": "Garden Cart",
      "deviceCode": "GDN-0023",

      "deviceOS": "15 gallon capacity rolling garden cart",
	  "deviceStatus": 32.99,
	  "deviceRating": 2.8,

      "imageUrl": "assets/images/garden_cart.png"
    },
    {

      "deviceName": "Hammer",
      "deviceCode": "TBX-0048",

      "deviceOS": "Curved claw steel hammer",
	  "deviceStatus": 8.9,
	  "deviceRating": 5,

      "imageUrl": "assets/images/hammer.png"
	}];
	constructor(){
		this.filteredDevices=this.devices;
		this.listFilter='Rake';
	}

	performFilter(filterBy:string): IDevice[]{
		filterBy=filterBy.toLocaleLowerCase();
		return this.devices.filter((device : IDevice)=>
		device.deviceName.toLocaleLowerCase().indexOf(filterBy) !== -1);

	}

  toggleImage(): void {
    this.showImage = !this.showImage;
  };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}