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
import { RouterModule } from '@angular/router';
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
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'devices', component: DeviceListComponent },
      { path: 'devices/:id', component: DeviceDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome' ,pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome' ,pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
