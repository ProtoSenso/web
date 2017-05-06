import { Component, NgZone, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import '../rxjs-operators';

import { AngularFire } from 'angularfire2'

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/users/login/login';
import { FirealarmPage } from '../pages/firealarm/firealarm'; 
import { UserSettingsPage } from '../pages/users/settings/userSettings';
import { MeasurementsOverviewPage } from '../pages/measurements/measurementsOverview';

//Services
import { LoginService } from '../services/users/login.service';
import { UserService } from '../services/users/user.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  @ViewChild(Nav) nav: Nav;

  zone: NgZone;
  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public af: AngularFire, public loginService: LoginService, public userService: UserService ) {
    this.initializeApp();
    this.zone = new NgZone({});
  
    this.af.auth.subscribe((user) => {
          this.zone.run( () => {
            console.log(user);
            if(!user){
              this.rootPage = LoginPage;
              this.af.auth.unsubscribe();
            }
            else {
              this.rootPage = HomePage;
              this.userService.setUser(user);
              this.af.auth.subscribe();
            }
        });
      });
  
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Fire alarm', component: FirealarmPage },
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut(){
    this.loginService.logoutUser();
    location.reload();
    //this.rootPage = LoginPage;
  }

}
