import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { City } from 'src/app/shared/models/cityVM';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: City = new City;
  cityObject: City = new City;
  CityId: any = null;
  temperatureUnit = 'C';
  constructor(private service: ServiceService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.CityId = (param.get('id'));
      if (this.CityId)
        this.getCityById();

    })
  }
  getCityById() {
    this.service.GetcityForecastById(this.CityId).subscribe(result => {
      this.city = result as City;
      this.cityObject = { ...this.city }
    })
  }
  FilterByDate(date: Date) {
    date.setHours(0, 0, 0, 0);
    const cityCopy: City = { ...this.city }; 
    this.cityObject.forecast = cityCopy.forecast.filter((f) => {
      return new Date(f.date + ' 00:00:00').toISOString() === date.toISOString();
    });

  }
  EventUnitEmited(Event: string) {
    this.temperatureUnit = Event;
  }
}
