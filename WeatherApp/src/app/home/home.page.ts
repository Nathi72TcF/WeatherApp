import { WeatherService } from './../Service/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CityNames = [{city: 'pretoria', id: '1'},
              {city: 'Tembisa',  id: '2'},
              {city: 'Soweto',  id: '3'},
              {city: 'Cape Town',  id: '4'},
              {city: 'Durban',  id: '5'},
              ];
  CityName;

  constructor(public weatherService: WeatherService) { }

}
