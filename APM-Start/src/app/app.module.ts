import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import { DeviceDetailGuard } from './devices/device-detail.guard';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { QaSolutionsComponent } from './qaSolutions/qa-solutions.component';
import { DeviceModule } from './devices/device.module';
@NgModule({
  declarations: [
    AppComponent,
    
    WelcomeComponent,
    QaSolutionsComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    RouterModule.forRoot([
      
      { path: 'welcome', component: WelcomeComponent },
      { path: 'qaSolutions', component: QaSolutionsComponent},
      { path: '', redirectTo: 'welcome' ,pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome' ,pathMatch: 'full' }
    ]),
    DeviceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
