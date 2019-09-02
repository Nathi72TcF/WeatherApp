import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getCities = [];
  CityName;
  AIPID = '&APPID=7e44a929d6be6b582285a05399da4509';

  constructor(public http: HttpClient) { }

  getWeather(CityName) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + CityName + this.AIPID);
  }

  getCityWeather() {
    // this.weatherService.getWeather().subscribe((data) => {
    //   this.APIinfor = data;
    //   console.log(this.APIinfor);
    //   this.temp = Math.round(this.APIinfor.main.temp - 273.15);
    //   this.max = Math.round(this.APIinfor.main.temp_max - 273.15);
    //   this.min = Math.round(this.APIinfor.main.temp_min - 273.15);
    //   this.pressure = Math.round(this.APIinfor.main.pressure - 273.15);
    //   console.log(this.temp);
    //   console.log(this.max);
    //   console.log(this.min);
    //   console.log(this.pressure);
    // });
  }

  getCity() {
    return this.getCities;
  }

}

// http://api.openweathermap.org/data/2.5/weather?q=Pretoria&APPID=7e44a929d6be6b582285a05399da4509
// 'http//:api.openweathermap.org/data/2.5/weather?q=' + this.CityName + this.AIPID
