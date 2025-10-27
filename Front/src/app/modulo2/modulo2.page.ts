import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonRippleEffect,
  IonButton,
  IonButtons,
  IonMenuButton, 
  IonAvatar, 
  AlertController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.page.html',
  styleUrls: ['./modulo2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonIcon,
    IonRippleEffect,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonAvatar,
    IonCardTitle,
  ],
})
export class Modulo2Page implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }

  async selectActivity(activityName: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Selección',
      cssClass: 'custom-alert', // <-- Clase personalizada para el modal
      message: `¿Estás seguro de que quieres elegir "${activityName}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-button-cancel', // Clase para el botón de cancelar
        },
        {
          text: 'Aceptar',
          cssClass: 'alert-button-confirm', // Clase para el botón de aceptar
          handler: () => {
            console.log(`Actividad seleccionada: ${activityName}`);
            // Aquí puedes agregar la lógica para guardar la selección del usuario.
          },
        },
      ],
    });

    await alert.present();
  }
}