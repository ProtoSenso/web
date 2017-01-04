import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api

//Components && directives
import { AppComponent }   from './app.component';
import { HeaderComponent } from './Components/Header/header.component';
import {CHART_DIRECTIVES } from 'angular2-highcharts';

//Services
import {TempatureService} from './Shared/Services/Tempature.service'


@NgModule({
  imports:      [ // module dependencies
   BrowserModule,
   HttpModule
  ], 
  declarations: [ AppComponent, HeaderComponent, CHART_DIRECTIVES ], // components and directives
  bootstrap:    [ AppComponent ],  // root component
  providers: [TempatureService]  // services
})
export class AppModule { }
