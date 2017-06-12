import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'QrCodeRegistration',
  templateUrl: 'QrCodeRegistration.html'
})
export class QrCodeRegistration implements OnInit{

 constructor(params: NavParams, public viewCtrl: ViewController) {
 }

  ngOnInit(): void {

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}