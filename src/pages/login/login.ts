import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'LoginPage',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    console.log("HELOOOOOOOOOOOOOOOOOOOOO WORLD");
  }

  
    ngOnInit(): void{
    }
}