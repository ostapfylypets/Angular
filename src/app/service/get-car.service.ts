import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Car } from "../modules/get-car";

@Injectable({
  providedIn: 'root'
})
export class getCarService {
  private url: string
  constructor(private httpClient: HttpClient) {
    this.url = "http://92.253.239.109/api/v1/cars"
  }
  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.url, car);
  }
}
