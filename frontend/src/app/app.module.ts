import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { CityListComponent } from './component/city-list/city-list.component';
import { CityComponent } from './component/city/city.component';
import { FormsModule } from '@angular/forms';
import { NgToggleModule } from 'ng-toggle-button';
import { AppRoutingModule } from './app-routing.module';
import { TemperatureUnitComponent } from './component/temperature-unit/temperature-unit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchDyDateComponent } from './component/search-dy-date/search-dy-date.component';
import { SearshByIdComponent } from './component/searsh-by-id/searsh-by-id.component';



@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityComponent,
    TemperatureUnitComponent,
    SearchDyDateComponent,
    SearshByIdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgToggleModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
