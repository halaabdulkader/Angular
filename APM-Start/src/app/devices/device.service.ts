import {Injectable} from '@angular/core';
import { IDevice } from './device';

@Injectable({
    providedIn:'root'
})
export class DeviceService{

    getDevices(): IDevice[]{
        return [  {

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

    }

}