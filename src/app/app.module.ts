import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

// Import Scripts
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChartsModule } from 'ng2-charts';
import { QRCodeModule } from 'angular2-qrcode';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//Pages
import { HomePage } from '../pages/home/home';
import { MeasurementsOverviewPage } from '../pages/measurements/measurementsOverview';

//User pages
import { LoginPage } from '../pages/users/login/login';
import { RegistrationPage } from '../pages/users/login/registration';
import { ResetPasswordPage } from '../pages/users/login/resetPassword';
import { UserSettingsPage } from '../pages/users/settings/userSettings';
import { UsersTab } from '../pages/users/settings/tabs/usersTab/usersTab';
import { QrCodeRegistration } from '../pages/users/settings/tabs/usersTab/modals/QrCodeRegistration';
import { QrCodeScanner } from '../pages/users/settings/tabs/usersTab/modals/QrCodeScanner';
import { SensorsTab } from '../pages/users/settings/tabs/sensorsTab';

//Services
import { UserService } from '../services/users/user.service';
import { UserManagementService } from '../services/users/registerUser.service';
import { EmitterService } from '../services/emitter/emitter.service';

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

@NgModule({
  imports: [ // module dependencies
    IonicModule.forRoot(MyApp),  
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    ChartsModule,
    QRCodeModule
  ],
  declarations: [  // components and directives
    MyApp,
    LoginPage,
    RegistrationPage,
    ResetPasswordPage,
    UserSettingsPage,
    UsersTab,
    SensorsTab,
    HomePage,
    MeasurementsOverviewPage,
    QrCodeRegistration,
    QrCodeScanner
    
  ],
  bootstrap: [IonicApp], // root component
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage,
    ResetPasswordPage,
    UserSettingsPage,
    UsersTab,
    SensorsTab,
    HomePage,
    MeasurementsOverviewPage,
    QrCodeRegistration,
    QrCodeScanner
  ],
providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
            UserService, TempatureService, AngularFireAuth,
            UserManagementService, InAppBrowser, EmitterService]  // services
})
export class AppModule {}