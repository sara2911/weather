import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { City } from 'src/app/shared/models/cityVM';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  CityList: City[] = [];
  AllCities: City[] = [];
  today = new Date();
  temperatureUnit = 'C';//C or F
  constructor(private service: ServiceService,
    private router: Router) { }
  ngOnInit(): void {
    this.getAllCityWithForcast()
  }
  getAllCityWithForcast() {
    this.service.GetForecast().subscribe((result) => {
      this.AllCities = result as City[];
      this.CityList = this.AllCities.map((city) => ({ ...city })); // Deep copy of City objects
      this.FilterByDate(this.today)
    })
  }

  EventUnitEmited(Event: string) {
    this.temperatureUnit = Event;
  }

  FilterByDate(date: Date) {
    this.CityList = [];
    date.setHours(0, 0, 0, 0);
    this.AllCities.forEach((originalCity) => {
      const cityCopy: City = { ...originalCity }; 
      cityCopy.forecast = cityCopy.forecast.filter((f) => {
        return new Date(f.date + ' 00:00:00').toISOString() === date.toISOString();
      });
      this.CityList.push(cityCopy);
    });

  }
  SearshById(id: any) {
    this.router.navigateByUrl(`/city/${id}`);
  }
}
