import { Component, OnInit } from '@angular/core';
import {CHART_DIRECTIVES } from 'angular2-highcharts';
import { Tempature } from './Shared/Dto/Tempature'
import { TempatureService } from './Shared/Services/Tempature.service'
import { Observable } from 'rxjs/Observable';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [` .center-chart{ display:block; margin: 0 auto; } `]
})
export class AppComponent { 

  chart : HighchartsChartObject;
  options: HighchartsOptions;
  items: Observable<string[]>;
  fire: boolean = false;
  audio: HTMLAudioElement;

    constructor(
        private tempatureService: TempatureService
    ) {  }

    ngOnInit(): void{

        this.audio = new Audio();
        this.audio.src = '../app/Shared/Resources/Sounds/house_fire_alert.mp3';
        this.audio.load();

        var dataList = [];
    
       setInterval(() => {
        //Send the call to the backend and see if we can get some data

        this.tempatureService.listTempatures().subscribe(
            
            data => {
                    var temp = (data)[0].temperature / 1000;
                    console.log("Tempature from server: " + temp);
                    if(temp > 40) {
                        this.fire=true;
                        this.audio.play();
                    }
                    else {
                        this.fire=false;
                        this.audio.pause();
                    }
            },
         onerror => {
            //If we don't manage to get the data, generate a random number
            this.FireGenerator();
         });
        }, 10000);
    }

    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private FireGenerator() {
         var currentTempature = this.getRandomInt(0, 150)
            console.log("Generated Tempature: " + currentTempature);
             if(currentTempature > 100){
                 this.fire = true;
                 //this.audio.play();

             }
             else{
                 this.fire = false;
                 this.audio.pause();
             }
    }

}
