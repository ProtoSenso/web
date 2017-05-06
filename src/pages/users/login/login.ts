import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';
import { LoginService } from '../../../services/users/login.service';
import { HomePage } from '../../home/home';
import { ResetPasswordPage } from '../login/resetPassword';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;

  constructor(public navCtrl: NavController, public authData: LoginService,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController) { }

    loginUser() {      
        this.authData.loginUserGoogle().then( authData => {
           this.navCtrl.setRoot(HomePage);
        }, error => {
         this.loading.dismiss().then( () => {
           console.log(error);
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });

      this.loading.present();
    }

    goToResetPassword(){
      this.navCtrl.push(ResetPasswordPage);
    }
    
    skipLogin(){
      this.navCtrl.setRoot(HomePage);
    }

    /**
     * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
     */
    elementChanged(input){
      let field = input.inputControl.name;
      this[field + "Changed"] = true;
    }

}