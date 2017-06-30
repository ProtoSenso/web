import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { TempatureService } from '../../services/sensors/tempature.service';
import { UserService } from '../../services/users/user.service';
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

    constructor(private tempatureService: TempatureService, private userService: UserService) 
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
        var user = this.userService.getUser();

        if(user.followee != null && user.followee != undefined && user.followee.length > 0){
            this.currentParent = user.followee[0];
        }
        else{
            this.currentParent = "";
        }        

        this.getTemperature();

        setInterval(() => {
            this.getTemperature();
        }, 5000);
    }
    
    ngAfterContentInit(){
    }

    getTemperature(){
         this.tempatureService.listTempatures().subscribe(
                data => {
                        var temp = (data).pop();
                        if(temp != null)
                        {
                            this.changeData(+temp.unixTimestamp);
                        }
                        console.log("Tempature from server: " + temp);
                });
    }

    // events
    public chartClicked(e:any):void { this.changeData(this.getRandomInt(0,100)); }
        
    getRandomInt(min, max) {        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public chartHovered(e:any):void { }

    public changeData(sensorDate: number): void{
        
        
        var date = new Date();
        var currentUnixDateTime = date.getTime();
            
        console.log("CurrentDate; " + currentUnixDateTime);
        console.log("CurrentDate; " + (currentUnixDateTime - (2*60*60*1000)));
        console.log("SensorDate: " + sensorDate);
        if((currentUnixDateTime - (2*60*60*1000)) < sensorDate){
            this.changeDataGreen();
            this.status = "Ok!";
            this.priority = 0;
        }
        else if((currentUnixDateTime - (5*60*60*1000)) < sensorDate){
            this.changeDataYellow();
            this.status = "A slight anomaly";
            this.priority = 1;
        }
         else if((currentUnixDateTime - (12*60*60*1000)) < sensorDate){
            this.changeDataOrange();
            this.status = "High chance something is wrong";
            this.priority = 2;
        }
        else {
            this.changeDataRed();
            this.status = "Something is wrong!";
            this.priority = 3;
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
