import { Component, OnInit } from '@angular/core';
import { TempatureService } from '../../services/sensors/tempature.service';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'FirealarmPage',
  templateUrl: 'firealarm.html'
})
export class FirealarmPage implements OnInit {

  items: Observable<string[]>;
  fire: boolean = false;
  audio: HTMLAudioElement;

  constructor(public navCtrl: NavController,  private tempatureService: TempatureService) {  }

    ngOnInit(): void {
       this.audio = new Audio();
       this.audio.src = '../../assets/sounds/house_fire_alert.mp3';
       this.audio.load();

       setInterval(() => {
        //Send the call to the backend and see if we can get some data
        this.tempatureService.listTempatures().subscribe(
            data => {
                    var temp = (data)[0].temperature;
                    console.log("Tempature from server: " + temp);
                    if(temp > 40) {
                        this.fire=true;
                        //this.audio.play();
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


