import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-unit',
  templateUrl: './temperature-unit.component.html',
  styleUrls: ['./temperature-unit.component.css']
})
export class TemperatureUnitComponent {

  @Output() temperatureUnit= new EventEmitter<string>();
  unitValue:any=true;
  OnChange(){
   let  UnitValue=this.unitValue?'C':'F'
    this.temperatureUnit.emit(UnitValue)
  }
}
