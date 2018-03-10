import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>
        Ionic Blank
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <p>
      NgRx and Ionic template! Get ready for quick apps!
    </p>
  </ion-content>
`
})
export class HomeContainer {

  constructor(public navCtrl: NavController) {
    
  }

}
