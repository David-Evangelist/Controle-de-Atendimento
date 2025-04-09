import { Component, OnInit } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss'],
  imports: [IonAlert, IonButton],
})
export class AlertButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  alertButtons = ['OK'];
}
