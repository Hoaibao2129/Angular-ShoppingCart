import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../model/carModel';

@Injectable({
  providedIn: 'root',
})
export class CarServicesService {
  constructor(private http: HttpClient) {}

  getInfo(): Observable<CarModel> {
    return this.http.get<any>(
      'https://639aa26831877e43d671a35c.mockapi.io/car/car'
    );
  }
}
