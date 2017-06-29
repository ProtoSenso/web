import { 
  NavController, 
  LoadingController, 
  AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserManagementService } from  '../../../services/users/registerUser.service';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'resetPassword.html',
})
export class ResetPasswordPage {

  public resetPasswordForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;

  constructor(public authData: UserManagementService, public formBuilder: FormBuilder, 
        public nav: NavController, public loadingCtrl: LoadingController, 
        public alertCtrl: AlertController) {

        this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required])],
        })
    }

    resetPassword(){
        this.submitAttempt = true;

        if (!this.resetPasswordForm.valid){
            console.log(this.resetPasswordForm.value);
        } else {
        }
    }

    /**
     * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
     */
    elementChanged(input){
      let field = input.inputControl.name;
      this[field + "Changed"] = true;
    }
}