import { Injectable } from '@angular/core';
import { HttpService } from './shared/http.service';
import { City } from './shared/models/cityVM';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpService:HttpService) { }
  GetForecast(){
    return this.httpService.get('forecast')
  }
  // '/cityForecast/:cityId'/
  GetcityForecastById(cityId:string){
    return this.httpService.get(`cityForecast/${cityId}`)
  }

}
