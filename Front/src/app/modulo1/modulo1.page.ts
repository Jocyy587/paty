import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { Router, RouterModule } from '@angular/router';
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
  IonButton,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonChip,
  IonLabel,
  IonList,
  IonItem,
  IonFab,
  IonFabButton,
  IonInput,
  IonFooter,
} from '@ionic/angular/standalone';

register();

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.page.html',
  styleUrls: ['./modulo1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    RouterModule,
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
    IonButton,
    IonButtons,
    IonMenuButton,
    IonAvatar,
    IonChip,
    IonLabel,
    IonList,
    IonItem,
    IonInput,
    IonFooter,
    IonFab,
    IonFabButton,
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

  // Variable para forzar la reinicialización del carrusel
  swiperReady = true;

  // --- Propiedades para el Chatbot ---
  isChatOpen = false;
  userMessage = '';
  chatMessages: { sender: 'user' | 'bot'; text: string }[] = [];

  // Referencia al contenedor de mensajes para hacer scroll
  @ViewChild('chatMessagesContainer') private chatMessagesContainer!: ElementRef;


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

  // --- Métodos para el Chatbot ---

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen && this.chatMessages.length === 0) {
      // Mensaje de bienvenida inicial
      setTimeout(() => {
        this.chatMessages.push({ sender: 'bot', text: '¡Hola! 👋 ¿En qué puedo ayudarte hoy?' });
        this.scrollToBottom();
      }, 300);
    }
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    // Añadir mensaje del usuario
    this.chatMessages.push({ sender: 'user', text: this.userMessage });
    this.userMessage = '';
    this.scrollToBottom();

    // Simular respuesta del bot
    setTimeout(() => {
      this.chatMessages.push({ sender: 'bot', text: 'Lo sentimos, no estoy disponible aún.' });
      this.scrollToBottom();
    }, 1000);
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const container = this.chatMessagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }, 100);
  }
}
