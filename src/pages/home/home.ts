import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { TempatureService } from '../../services/sensors/tempature.service';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'HomePage',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, AfterContentInit {
    private priority: number = 2;
    private status: string;
    private currentParent: string;

    // Doughnut
    public doughnutChartType:string = 'doughnut';
    public doughnutChartData:Array<any> = [];
    public doughnutChartOptions:any = {
        responsive: true,
        cutoutPercentage: 70,
        tooltips: { enabled: false},
        hover: { mode: 'index'},
        maintainAspectRatie: false
    };
    public doughnutChartColors:Array<any> = [];

    @ViewChild("statusChart") myCanvas;  
    context: CanvasRenderingContext2D;

    constructor() { this.changeData(); }

    ngOnInit(): void { 
        this.currentParent = "Henk";

    }
    
    ngAfterContentInit(){
    }

    // events
    public chartClicked(e:any):void {
        this.changeData();    }
    
    public chartHovered(e:any):void {
    }

    public changeData(): void{
        this.priority++;
        if(this.priority === 4)
            this.priority = 0;


        if(this.priority === 0){
            this.changeDataGreen();
            this.status = "Ok!";
        }
        else if(this.priority === 1){
            this.changeDataYellow();
            this.status = "A slight anomaly";
        }
        else if(this.priority === 2){
            this.changeDataOrange();
            this.status = "High chance something is wrong";
        }
        else if(this.priority === 3){
            this.changeDataRed();
            this.status = "Something is wrong!";
        }
    }

    // Prio: 0
    public changeDataGreen():void {
        var randomData = this.getRandomInt(0, 100);
        var leftOver = 100 - randomData;
        if(randomData === 100)
            leftOver = 0;

        this.doughnutChartData.length = 0;
        this.doughnutChartColors.length = 0;
        
        this.doughnutChartData = [randomData, leftOver];

        this.doughnutChartColors = [{
            backgroundColor: ['rgba(117, 209, 24, 0.5)',  'rgba(255, 255, 255, 0.5)'],
            borderColor: ['rgba(117, 209, 24, 1)', 'rgba(189, 189, 189, 0.4)'],
            pointBackgroundColor: ['rgba(77,83,96,1)','rgba(77,83,96,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff', '#fff'],
            pointHoverBorderColor: ['rgba(77,83,96,1)']
        }];

    }


    //Prio 1
    public changeDataYellow():void {
        var randomData = this.getRandomInt(0, 100);
        var leftOver = 100 - randomData;
        if(randomData === 100)
            leftOver = 0;

        this.doughnutChartData.length = 0;
        this.doughnutChartColors.length = 0;

        this.doughnutChartData = [randomData, leftOver];
        
        this.doughnutChartColors = [{
            backgroundColor: ['rgba(255, 233, 0, 0.5)',  'rgba(255, 255, 255, 0.5)'],
            borderColor: ['rgba(255, 233, 0, 1)', 'rgba(189, 189, 189, 0.4)'],
            pointBackgroundColor: ['rgba(77,83,96,1)','rgba(77,83,96,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff', '#fff'],
            pointHoverBorderColor: ['rgba(77,83,96,1)']
        }];
    }
    
    //Prio 2
    public changeDataOrange():void {
        var randomData = this.getRandomInt(0, 100);
        var leftOver = 100 - randomData;
        if(randomData === 100)
            leftOver = 0;


            this.doughnutChartData.length = 0;
        this.doughnutChartColors.length = 0;
        this.doughnutChartData = [randomData, leftOver];

        this.doughnutChartColors = [{
            backgroundColor: ['rgba(247, 155, 89, 0.5)',  'rgba(255, 255, 255, 0.5)'],
            borderColor: ['rgba(247, 155, 89, 1)', 'rgba(189, 189, 189, 0.4)'],
            pointBackgroundColor: ['rgba(77,83,96,1)','rgba(77,83,96,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff', '#fff'],
            pointHoverBorderColor: ['rgba(77,83,96,1)']
        }];
    }

    //Prio 3
    public changeDataRed():void {
        var randomData = this.getRandomInt(0, 100);
        var leftOver = 100 - randomData;
        if(randomData === 100)
            leftOver = 0;

        this.doughnutChartData.length = 0;
        this.doughnutChartColors.length = 0;
        this.doughnutChartColors = [];

        this.doughnutChartData = [randomData, leftOver];
            
        this.doughnutChartColors = [{
            backgroundColor: ['rgba(255, 26, 26, 0.5)',  'rgba(255, 255, 255, 0.5)'],
            borderColor: ['rgba(255, 26, 26, 1)', 'rgba(189, 189, 189, 0.4)'],
            pointBackgroundColor: ['rgba(77,83,96,1)','rgba(77,83,96,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff', '#fff'],
            pointHoverBorderColor: ['rgba(77,83,96,1)']
        }];
    }

    public getPriority(): number{
        return this.priority;
    }
    
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


/*
Chart.types.Doughnut.extend({
    name: "DoughnutAlt",
    draw: function() {
        Chart.types.Doughnut.prototype.draw.apply(this, arguments);
        this.chart.ctx.fillStyle = 'black';
        this.chart.ctx.textBaseline = 'middle';
        this.chart.ctx.fillText(this.segments[0].value + "%", this.chart.width / 2 - 20, this.chart.width / 2, 200);
    }
});*/
