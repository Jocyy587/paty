import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonContent,
  IonList,
  IonItem,
  IonFooter,
  IonRouterOutlet,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonContent,
    IonList,
    IonItem,
    IonFooter,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  constructor() {}
}