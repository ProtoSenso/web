import {Component, EventEmitter, Input, OnChanges} from '@angular/core';
import {User} from '../../../dto/users/user';
import { UserManagementService } from '../../../services/users/registerUser.service';
import {Observable} from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { LoginPage } from './login';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  private user = new User();
  private passwordCheck: string;

  constructor(public userService: UserManagementService, public navCtrl: NavController) {
  }


  submit() {
    console.log(this.user);
    this.userService.addUser(this.user);
  }

  validation(){

  }

  cancel(){
    this.navCtrl.setRoot(LoginPage);
  }

}