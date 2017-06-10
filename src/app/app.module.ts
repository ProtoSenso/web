import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Import Scripts
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ChartsModule } from 'ng2-charts';

//Pages
import { HomePage } from '../pages/home/home';
import { FirealarmPage } from '../pages/firealarm/firealarm'; 
import { MeasurementsOverviewPage } from '../pages/measurements/measurementsOverview';

//User pages
import { LoginPage } from '../pages/users/login/login';
import { ResetPasswordPage } from '../pages/users/login/resetPassword';
import { UserSettingsPage } from '../pages/users/settings/userSettings';
import { UsersTab } from '../pages/users/settings/tabs/usersTab/usersTab';
import { QrCodeRegistration } from '../pages/users/settings/tabs/usersTab/modals/QrCodeRegistration';
import { SensorsTab } from '../pages/users/settings/tabs/sensorsTab';

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
    HttpModule,
    ChartsModule
  ],
  declarations: [  // components and directives
    MyApp,
    LoginPage,
    ResetPasswordPage,
    UserSettingsPage,
    UsersTab,
    SensorsTab,
    HomePage,
    FirealarmPage,
    MeasurementsOverviewPage,
    QrCodeRegistration
  ],
  bootstrap: [IonicApp], // root component
  entryComponents: [
    MyApp,
    LoginPage,
    ResetPasswordPage,
    UserSettingsPage,
    UsersTab,
    SensorsTab,
    HomePage,
    FirealarmPage,
    MeasurementsOverviewPage,
    QrCodeRegistration
  ],
providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
            LoginService, UserService, TempatureService]  // services
})
export class AppModule {}