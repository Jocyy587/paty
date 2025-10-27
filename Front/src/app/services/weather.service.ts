import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '2d4a5769b8d379e4108483efe07c8911';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric', // Para obtener la temperatura en Celsius
      lang: 'es'       // Para obtener la descripción en español
    };
    return this.http.get(this.apiUrl, { params });
  }
}