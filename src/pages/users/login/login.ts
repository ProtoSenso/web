import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';
import { UserManagementService } from '../../../services/users/registerUser.service';
import { HomePage } from '../../home/home';
import { ResetPasswordPage } from '../login/resetPassword';
import { RegistrationPage } from '../login/registration';
import { UserService } from '../../../services/users/user.service'
import { User } from '../../../dto/users/user';
import firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  user: User;

  constructor(public navCtrl: NavController, public authData: UserManagementService, public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, private _userRepo: UserService) { 
      this.user = new User();

    }

    loginUser() {   
      this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });

      this.loading.present().then(() => {

        var user = this.authData.getUser(this.user.email, this.user.password)
            .subscribe((user) => {
              console.log("Succes login");
              console.log(user);
              this._userRepo.setUser(user);
              this.navCtrl.setRoot(HomePage);
            }, (err) => {
              console.log(err);
              this.navCtrl.setRoot(LoginPage);
            });
        });
    }

    goToResetPassword(){
      this.navCtrl.push(ResetPasswordPage);
    }

    goToRegister(){
      this.navCtrl.push(RegistrationPage);
    }
    
    skipLogin(){
      this.navCtrl.setRoot(HomePage);

      var user = new User();

      this._userRepo.setUser(user);
    }


    /**
     * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
     */
    elementChanged(input){
      let field = input.inputControl.name;
      this[field + "Changed"] = true;
    }

}