import { NgModule } from '@angular/core';

import { DeviceListComponent } from './device-list.component';
import { DeviceDetailComponent } from './device-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { DeviceDetailGuard } from './device-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DeviceListComponent,
    DeviceDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
   
    RouterModule.forChild([
      { path: 'devices', component: DeviceListComponent },
    { path: 'devices/:id', 
    canActivate:[DeviceDetailGuard],
    component: DeviceDetailComponent 
  },
  ]),
    SharedModule
  ]
})
export class DeviceModule { }
