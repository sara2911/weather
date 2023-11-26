import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureUnitComponent } from './temperature-unit.component';

describe('TemperatureUnitComponent', () => {
  let component: TemperatureUnitComponent;
  let fixture: ComponentFixture<TemperatureUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureUnitComponent]
    });
    fixture = TestBed.createComponent(TemperatureUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
