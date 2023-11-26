import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDyDateComponent } from './search-dy-date.component';

describe('SearchDyDateComponent', () => {
  let component: SearchDyDateComponent;
  let fixture: ComponentFixture<SearchDyDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDyDateComponent]
    });
    fixture = TestBed.createComponent(SearchDyDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
