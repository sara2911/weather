import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searsh-by-id',
  templateUrl: './searsh-by-id.component.html',
  styleUrls: ['./searsh-by-id.component.css']
})
export class SearshByIdComponent {

  SearchValue:any;

  @Output() searchCityId= new EventEmitter<number>();

}
