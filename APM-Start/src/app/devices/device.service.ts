import { Injectable } from '@angular/core';
import { IDevice } from './device';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceUrl='api/products/products.json';
  constructor(private http: HttpClient) { }

  getDevices(): Observable<IDevice[]> {
   // this.getDevices(): Observable<IDevice[]>{
     return this.http.get<IDevice[]>(this.deviceUrl);
     
}
private handleError(err: HttpResponse<Text>)  {
  let errorMessage = '';
  console.error(errorMessage);
  return throwError(errorMessage);
}
}