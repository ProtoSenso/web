import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'QrCodeScanner',
  templateUrl: 'QrCodeScanner.html'
  
})
export class QrCodeScanner implements OnInit{

  qrCodeData: any;

 constructor(public viewCtrl: ViewController) {
 }

  ngOnInit(): void {
      console.log("Scanner");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  scan()
  {
     
  }
}