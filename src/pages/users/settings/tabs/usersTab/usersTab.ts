import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { UserService } from '../../../../../services/users/user.service'
import { User } from '../../../../../dto/users/user';
import { QrCodeRegistration } from './modals/QrCodeRegistration';
import { QrCodeScanner } from './modals/QrCodeScanner';

import { BarcodeScanner } from 'ionic-native';

import { UserManagementService } from '../../../../../services/users/registerUser.service';
//import { QRScanner } from 'cordova-plugin-qrscanner';

@Component({
    templateUrl: 'usersTab.html'
})
export class UsersTab implements OnInit{

    parents: User[] = [];
    children: User[] = [];

    user: User;

    constructor(public userService: UserService, public modalCtrl: ModalController,private registration: UserManagementService){

    }

    ngOnInit(): void {
      this.user = this.userService.getUser();
      this.parents = this.user.followee;
      this.children = this.user.followers;
    }    

    addParent()
    {
        var childuId = this.userService.getUid();

        BarcodeScanner.scan().then((barcodeData) => {
            this.registration.registerParent(barcodeData, childuId).subscribe((user) => {
                console.log("Registration success");
                console.log(user);
                this.user = this.userService.setUser(user);
            }, (err) => {
                console.log(err);
            });
        }, (err) => {
            alert("Couldn't scan qr code");
        });
    }

    addChild(){
      let profileModal = this.modalCtrl.create(QrCodeRegistration, { userId: this.user.email });
      profileModal.present();
    }
}
