import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DeviceListComponent} from './devices/device-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import { HttpClientModule} from '@angular/common/http';
import { DeviceDetailComponent } from './devices/device-detail.component';
import { WelcomeComponent } from './home/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    DeviceDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
