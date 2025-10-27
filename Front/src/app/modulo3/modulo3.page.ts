import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonAvatar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modulo3',
  templateUrl: './modulo3.page.html',
  styleUrls: ['./modulo3.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonAvatar,
  ],
})
export class Modulo3Page implements OnInit {
  constructor() {}

  ngOnInit() {}
}