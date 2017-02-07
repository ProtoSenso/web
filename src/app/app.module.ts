import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//Components && directivesa
import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//Services
import {TempatureService} from '../services/sensors/tempature.service';

@NgModule({
  declarations: [  // components and directives
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [ // module dependencies
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp], // root component
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TempatureService]  // services
})
export class AppModule {}

export const firebaseConfig = {
    apiKey: "AIzaSyBxWPbhkOAHoOToZhmGSYK2D6KMc7dtKQs",
    authDomain: "grannywatcher.firebaseapp.com",
    databaseURL: "https://grannywatcher.firebaseio.com",
    storageBucket: "grannywatcher.appspot.com",
    messagingSenderId: "405262453706"
};