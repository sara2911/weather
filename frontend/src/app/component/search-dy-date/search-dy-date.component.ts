import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-dy-date',
  templateUrl: './search-dy-date.component.html',
  styleUrls: ['./search-dy-date.component.css']
})
export class SearchDyDateComponent {
  SearchValue:any;
  model?: NgbDateStruct;

  @Output() selectedDate= new EventEmitter<Date>();
  onDateSelect(event: NgbDateStruct){
    let selectedDate = new Date(event.year, event.month - 1, event.day);
    this.selectedDate.next(selectedDate);

 }
}
 
