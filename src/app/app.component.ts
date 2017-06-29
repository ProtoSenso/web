import { Component, NgZone, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import '../rxjs-operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/users/login/login';
import { UserSettingsPage } from '../pages/users/settings/userSettings';
import { MeasurementsOverviewPage } from '../pages/measurements/measurementsOverview';

//Services
import { UserService } from '../services/users/user.service';

import {Singleton } from '../services/config';


@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  @ViewChild(Nav) nav: Nav;

  zone: NgZone;
  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public userService: UserService, public af: AngularFireAuth, private alertCtrl: AlertController ) {
    this.initializeApp();
  
    this.rootPage = LoginPage;
    // used for an example of ngFor and navigation
    //  { title: 'Fire alarm', component: FirealarmPage },
    //
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Measurements overview', component: MeasurementsOverviewPage },
      { title: 'Settings', component: UserSettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  
  setIp(){
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut(){
    this.rootPage = LoginPage;
    this.userService.setUser(null);
    location.reload();
  }


  presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'IP:PORT/',
    inputs: [
      {
        name: 'IP',
        placeholder: 'IP'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'setIP',
        handler: data => {
          Singleton.setHost(data);
        }
      }
    ]
  });
  alert.present();
}
}
