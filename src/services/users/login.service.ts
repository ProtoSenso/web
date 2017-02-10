import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {
     // Here we declare the variables we'll be using.
     
    public fireAuth: any;
    public userProfile: any;

    constructor(public af: AngularFire) {
        //this.fireAuth = firebase.auth();
    }

    loginUserGoogle(): any{
        return this.af.auth.login({ 
            provider: AuthProviders.Google, 
            method: AuthMethods.Popup 
        });
    }

    loginUser(email: string, password: string): any {
        return this.af.auth.login(email, password);
    }


    resetPassword(email: string): any {
       // return this.fireAuth.sendPasswordResetEmail(email);
       return null;
    }

    logoutUser(): any {
        console.log("Logout");
        return this.af.auth.logout();
    }
}