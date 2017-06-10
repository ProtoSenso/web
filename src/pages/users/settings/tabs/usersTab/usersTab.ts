import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { UserService } from '../../../../../services/users/user.service'
import { User } from '../../../../../dto/users/user';
import { QrCodeRegistration } from './modals/QrCodeRegistration';

@Component({
    templateUrl: 'usersTab.html'
})
export class UsersTab implements OnInit{

    parents: User[] = [];
    children: User[] = [];

    user: User;

    constructor(public userService: UserService, public modalCtrl: ModalController){

    }

    ngOnInit(): void {
      this.user = this.userService.getUser();
      this.parents = this.user.parents;
      this.children = this.user.children;

      console.log(this.parents);
    }    

    addParent()
    {
      let profileModal = this.modalCtrl.create(QrCodeRegistration, { userId: this.user.uId });
      profileModal.present();
    }

    addChild(){

    }
}
