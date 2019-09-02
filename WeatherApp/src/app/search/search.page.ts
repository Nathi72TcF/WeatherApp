import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../Service/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  City;
  temp;
  min;
  max;
  pressure;
  APIinfor;
  CityNames = [{city: 'pretoria'},
              {city: 'Tembisa'},
              ];
  CityName;

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
  }

  getcityweather() {
    this.weatherService.getWeather(this.CityName).subscribe((data) => {
      this.APIinfor = data;
      console.log(this.APIinfor);
      this.temp = Math.round(this.APIinfor.main.temp - 273.15);
      this.max = Math.round(this.APIinfor.main.temp_max - 273.15);
      this.min = Math.round(this.APIinfor.main.temp_min - 273.15);
      this.pressure = Math.round(this.APIinfor.main.pressure - 273.15);
      // console.log(this.temp);
      // console.log(this.max);
      // console.log(this.min);
      // console.log(this.pressure);
    });
  }

}
