import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonChip,
  IonLabel,
  IonList,
  IonItem,
  IonSplitPane,
  IonMenu,
  IonFooter,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.page.html',
  styleUrls: ['./modulo1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonButtons,
    IonMenuButton,
    IonAvatar,
    IonChip,
    IonLabel,
    IonList,
    IonItem,
    IonSplitPane,
    IonMenu,
    IonFooter,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite el uso de componentes web como <swiper-container>
})
export class Modulo1Page implements OnInit {
  // Variable para almacenar los datos del clima.
  // La inicializamos como 'any' para flexibilidad, pero podría tener una interfaz específica.
  weatherData: any;
  weatherIcon: string = 'sunny-outline'; // Ícono por defecto

  // Lista de imágenes para el carrusel
  carouselImages = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg',
  ];
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.weatherService.getWeather('Juarez').subscribe({
      next: (data) => {
        this.weatherData = data;
        this.setWeatherIcon(data.weather[0].main);
      },
      error: (err) => console.error('Error al obtener el clima:', err),
    });
  }

  setWeatherIcon(condition: string) {
    // Mapeo simple de condiciones a íconos de Ionic
    const iconMap: { [key: string]: string } = {
      'Clear': 'sunny-outline',
      'Clouds': 'cloudy-outline',
      'Rain': 'rainy-outline',
      'Drizzle': 'rainy-outline',
      'Thunderstorm': 'thunderstorm-outline',
      'Snow': 'snow-outline',
      'Mist': 'cloudy-outline',
      'Smoke': 'cloudy-outline',
      'Haze': 'cloudy-outline',
      'Dust': 'cloudy-outline',
      'Fog': 'cloudy-outline',
    };
    this.weatherIcon = iconMap[condition] || 'cloud-outline'; // Ícono por defecto si no se encuentra
  }

}
