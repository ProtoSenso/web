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

    constructor(
        private tempatureService: TempatureService
    ) {  }

    ngOnInit(): void{
        var dataList = [];
    
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
        
    }

    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }

}
