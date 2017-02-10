import { Component, OnInit } from '@angular/core';
import { TempatureService } from '../../services/sensors/tempature.service';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'HomePage',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    constructor(public navCtrl: NavController,  private tempatureService: TempatureService) { }

    ngOnInit(): void { }
}


