import {Component, EventEmitter, Input, OnChanges} from '@angular/core';
import {User} from '../../../dto/users/user';
import { UserManagementService } from '../../../services/users/registerUser.service';
import { UserService } from '../../../services/users/user.service';
import {Observable} from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { LoginPage } from './login';
import { HomePage } from '../../home/home';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  private user = new User();
  private passwordCheck: string;

  constructor(public registrationService: UserManagementService, 
              public userService: UserService,
              public navCtrl: NavController) 
          { }


  submit() {
    console.log(this.user);
    this.user.uid = this.user.email;
    this.registrationService.addUser(this.user).subscribe((data) => {
      this.userService.setUser(data);
      this.navCtrl.setRoot(HomePage);
    });
  }

  validation(){

  }

  cancel(){
    this.navCtrl.setRoot(LoginPage);
  }

}