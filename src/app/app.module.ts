import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

//Pages
import { HomePage } from '../pages/home/home';
import { FirealarmPage } from '../pages/firealarm/firealarm'; 

//Login Pages
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/login/resetPassword';

//Services
import { LoginService } from '../services/users/login.service';
import { UserService } from '../services/users/user.service';

//Sensors services
import { TempatureService } from '../services/sensors/tempature.service';

//Components && directivesa
import { MyApp } from './app.component';


// Firebase config 
export const firebaseConfig = {
    apiKey: "AIzaSyBxWPbhkOAHoOToZhmGSYK2D6KMc7dtKQs",
    authDomain: "grannywatcher.firebaseapp.com",
    databaseURL: "https://grannywatcher.firebaseio.com",
    storageBucket: "grannywatcher.appspot.com",
    messagingSenderId: "405262453706"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [ // module dependencies
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    IonicModule.forRoot(MyApp),    
    HttpModule
  ],
  declarations: [  // components and directives
    MyApp,
    LoginPage,
    ResetPasswordPage,
    HomePage,
    FirealarmPage
  ],
  bootstrap: [IonicApp], // root component
  entryComponents: [
    MyApp,
    LoginPage,
    ResetPasswordPage,
    HomePage,
    FirealarmPage
  ],
providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
            LoginService, UserService, TempatureService]  // services
})
export class AppModule {}