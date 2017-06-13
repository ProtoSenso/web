import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'QrCodeRegistration',
  templateUrl: 'QrCodeRegistration.html'
  
})
export class QrCodeRegistration implements OnInit{

  qrCodeData: any;

 constructor(params: NavParams, public viewCtrl: ViewController) {
    this.qrCodeData = params.get('userId');
 }

  ngOnInit(): void {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}