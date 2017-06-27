import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
     // Here we declare the variables we'll be using.
     
    public fireAuth: any;
    public userProfile: any;
    private currentUser: firebase.User;

    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    }

     loginUserGoogle(): firebase.Promise<any> {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    get authenticated(): boolean {  
        return this.currentUser !== null;
    }

    resetPassword(email: string): any {
       // return this.fireAuth.sendPasswordResetEmail(email);
       return null;
    }

    logoutUser(): any {
        console.log("Logout");
        return this.afAuth.auth.signOut();
    }
}