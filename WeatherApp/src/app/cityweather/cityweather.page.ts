import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../Service/weather.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cityweather',
  templateUrl: './cityweather.page.html',
  styleUrls: ['./cityweather.page.scss'],
})
export class CityweatherPage implements OnInit {

  City;
  temp;
  min;
  max;
  pressure;
  APIinfor;
  CityName;

  constructor(public weatherService: WeatherService,
              public route: ActivatedRoute) {
               }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.CityName = params.get('id');
      console.log(this.CityName);
      this.getWeather();
    });
}

  getWeather() {
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
