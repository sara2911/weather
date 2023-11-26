import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshByIdComponent } from './searsh-by-id.component';

describe('SearshByIdComponent', () => {
  let component: SearshByIdComponent;
  let fixture: ComponentFixture<SearshByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearshByIdComponent]
    });
    fixture = TestBed.createComponent(SearshByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
