import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'QrCodeRegistration',
  templateUrl: 'QrCodeRegistration.html'
})
export class QrCodeRegistration {

 constructor(params: NavParams, public viewCtrl: ViewController) {
   console.log('UserId', params.get('userId'));
 }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}