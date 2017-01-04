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

    constructor(
        private tempatureService: TempatureService
    ) {  }

    ngOnInit(): void{

        var audio = new Audio();
        audio.src = '../app/Shared/Resources/Sounds/house_fire_alert.mp3';
        audio.load();

         setInterval(() => {
             
             var currentTempature = this.getRandomInt(0, 150)

             if(currentTempature > 100){
                 this.fire = true;
                 //audio.play();

             }
             else{
                 this.fire = false;
                 audio.pause();
             }
             console.log("Temp: " + currentTempature);
            }, 10000);

        var dataList = [];
    /*
        this.tempatureService.listTempatures().subscribe((res) => {
            (res).forEach(element => {
                dataList.push(element.temperature);
                
                 if(dataList.length > 10){
                     dataList.shift();
                 }

                this.options = { 
                    chart: { type: 'spline' },
                    title : { text : 'Beer Temp' },
                    series: [{
                        data: dataList,
                    }]
                };
                
            });
        });
     
         setInterval(() => { this.tempatureService.listTempatures().subscribe((res) => {
             var tempList = [];

             res.forEach(element => {
                 tempList.push(element.temperature);

                 if(tempList.length > 10){
                     tempList.shift();
                 }
             })
             this.chart.series[0].setData(tempList, true, true);
             this.chart.redraw();
         }) 
        }, 10000);
        */
    }

    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
