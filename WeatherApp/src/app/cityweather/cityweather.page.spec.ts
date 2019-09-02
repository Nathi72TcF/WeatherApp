import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityweatherPage } from './cityweather.page';

describe('CityweatherPage', () => {
  let component: CityweatherPage;
  let fixture: ComponentFixture<CityweatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityweatherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityweatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
