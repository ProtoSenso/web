import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { UserService } from '../../../../../services/users/user.service'
import { User } from '../../../../../dto/users/user';
import { QrCodeRegistration } from './modals/QrCodeRegistration';
import { QrCodeScanner } from './modals/QrCodeScanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { RegisterUserService } from '../../../../../services/users/registerUser.service';

@Component({
    templateUrl: 'usersTab.html'
})
export class UsersTab implements OnInit{

    parents: User[] = [];
    children: User[] = [];

    user: User;

    constructor(public userService: UserService, public modalCtrl: ModalController, 
                private scanner: BarcodeScanner, private registration: RegisterUserService){

    }

    ngOnInit(): void {
      this.user = this.userService.getUser();
      this.parents = this.user.parents;
      this.children = this.user.children;

      console.log(this.parents);
    }    

    addParent()
    {
         var childuId = this.userService.getUid();

          this.scanner.scan().then((result) => {

            this.registration.registerParent(result.text, childuId);

            // Success! Barcode data is here
            alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            }, (err) => {
                // An error occurred
            });
    }

    addChild(){
      let profileModal = this.modalCtrl.create(QrCodeRegistration, { userId: this.user.uId });
      profileModal.present();
    }
}
