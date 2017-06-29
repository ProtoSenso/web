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
    private priority: number = 1;
    private status: string;
    private currentParent: string;

    // Doughnut
    public doughnutChartType:string = 'doughnut';
    public doughnutChartData:Array<any> = [100, 0];
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

    constructor(private tempatureService: TempatureService) 
    { 
         this.doughnutChartColors = [{
            backgroundColor: ['rgba(117, 209, 24, 0.5)', 'rgba(255, 233, 0, 0.5)', 'rgba(247, 155, 89, 0.5)', 'rgba(255, 26, 26, 0.5)'],
            borderColor: [],
            pointBackgroundColor: ['rgba(77,83,96,1)','rgba(77,83,96,1)'],
            pointBorderColor: ['#fff'],
            pointHoverBackgroundColor: ['#fff', '#fff'],
            pointHoverBorderColor: ['rgba(77,83,96,1)']
        }];
    }

    ngOnInit(): void { 
        this.currentParent = "Henk";
        
        setInterval(() => {
            this.tempatureService.listTempatures().subscribe(
                data => {
                        var temp = (data).pop();
                        if(temp != null)
                        {
                            this.changeData(temp.measurement);
                        }
                        console.log("Tempature from server: " + temp);
                });
        }, 60000);
    }
    
    ngAfterContentInit(){
    }

    // events
    public chartClicked(e:any):void { this.changeData(this.getRandomInt(0,100)); }
        
    getRandomInt(min, max) {        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public chartHovered(e:any):void { }

    public changeData(tempature: number): void{
        
        if(tempature > 80 || tempature < -10){
            this.changeDataRed();
            this.status = "Something is wrong!";
            this.priority = 3;
        }
        else if(tempature > 60 || tempature < 0){
            this.changeDataOrange();
            this.status = "High chance something is wrong";
            this.priority = 2;
        }
        else if(tempature > 40 || tempature < 10){
            this.changeDataYellow();
            this.status = "A slight anomaly";
            this.priority = 1;
        }
        else if(tempature > 10){
            this.changeDataGreen();
            this.status = "Ok!";
            this.priority = 0;
        }
        
    }

    // Prio: 0
    public changeDataGreen():void {
         this.doughnutChartData = [100, 0, 0, 0];
    }


    //Prio 1
    public changeDataYellow():void {
        this.doughnutChartData = [0, 100, 0, 0];
        
    }
    
    //Prio 2
    public changeDataOrange():void {
       this.doughnutChartData = [0, 0, 100, 0];

    }

    //Prio 3
    public changeDataRed():void {
        this.doughnutChartData = [0, 0, 0, 100];
      
    }

    public getPriority(): number{
        return this.priority;
    }
    
}
