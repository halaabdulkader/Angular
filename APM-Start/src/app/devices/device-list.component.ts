import { Component, OnInit } from '@angular/core';
import { IDevice } from './device';
import { DeviceService } from './device.service';
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
  ];
 
	constructor(private deviceService: DeviceService){
    
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
    this.devices = this.deviceService.getDevices();
    this.filteredDevices = this.devices;
  }
  onRatingClicked(message : string): void{
    this.pageTitle='Device List: '+ message;
  }

}