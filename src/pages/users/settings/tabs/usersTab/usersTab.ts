import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { UserService } from '../../../../../services/users/user.service'
import { User } from '../../../../../dto/users/user';
import { QrCodeRegistration } from './modals/QrCodeRegistration';
import { QrCodeScanner } from './modals/QrCodeScanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
    templateUrl: 'usersTab.html'
})
export class UsersTab implements OnInit{

    parents: User[] = [];
    children: User[] = [];

    user: User;

    constructor(public userService: UserService, public modalCtrl: ModalController, private scanner: BarcodeScanner){

    }

    ngOnInit(): void {
      this.user = this.userService.getUser();
      this.parents = this.user.parents;
      this.children = this.user.children;

      console.log(this.parents);
    }    

    addParent()
    {
      console.log("parent");
      let profileModal = this.modalCtrl.create(QrCodeRegistration, { userId: this.user.uId });
      profileModal.present();
    }

    addChild(){
      console.log("Scanner");

      this.scanner.scan().then((result) => {
      // Success! Barcode data is here
      alert("We got a barcode\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled);
      }, (err) => {
          // An error occurred
      });
    }
}
