import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit, AfterViewInit {

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Generar varias formas con tamaños y duraciones aleatorias para la cascada
    const container: HTMLElement | null = this.el.nativeElement.querySelector('.screen__background');
    if (!container) return;

    const count = 14; // aumentar cuántas formas generar para mayor frecuencia
    for (let i = 0; i < count; i++) {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'screen__background__shape');
      this.renderer.addClass(span, 'screen__background__shape--rand');

      // estilos aleatorios básicos
      const size = Math.floor(20 + Math.random() * 150); // 20px..170px (más variedad)
      const left = Math.floor(5 + Math.random() * 90); // 5%..95%
      const radius = Math.floor(Math.random() * 60); // 0..60
      // Duraciones más cortas para caídas más frecuentes: 3s..8s
      const duration = (3 + Math.random() * 5).toFixed(2) + 's'; // 3s..8s
      // Delays más pequeños (hasta -2s) para que aparezcan más seguido
      const delay = (-Math.random() * 2).toFixed(2) + 's'; // negative so appear mid-animation

      this.renderer.setStyle(span, 'position', 'absolute');
      this.renderer.setStyle(span, 'left', `${left}%`);
      this.renderer.setStyle(span, 'top', `-30vh`);
      this.renderer.setStyle(span, 'width', `${size}px`);
      this.renderer.setStyle(span, 'height', `${size}px`);
      this.renderer.setStyle(span, 'border-radius', `${radius}px`);
  this.renderer.setStyle(span, 'background', `rgba(20,120,90, ${0.22 + Math.random() * 0.55})`);
      this.renderer.setStyle(span, 'z-index', '10');
      this.renderer.setStyle(span, 'pointer-events', 'none');
  this.renderer.setStyle(span, 'animation', `fall ${duration} linear infinite`);
  this.renderer.setStyle(span, 'animation-delay', `${delay}`);
      this.renderer.setStyle(span, 'transform-origin', 'center');

      this.renderer.appendChild(container, span);
    }
  }

  login() {
    // Por ahora, solo redirigimos a la página del módulo 1
    // En el futuro, aquí iría la lógica de autenticación.
    this.router.navigate(['/modulo1']);
  }
}
