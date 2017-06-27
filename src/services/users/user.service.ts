import { Injectable } from '@angular/core';
import { User } from '../../dto/users/user';
import { RegisterUserService } from './registerUser.service';

@Injectable()
export class UserService {

    private currentUser: User;

    constructor(public _registerUser: RegisterUserService) { 
        this.currentUser = new User("0", "");
    }

    public getName() {
        let org = null;
        try {
            org = this.currentUser.fullName
        } catch (e) {
            // this.Log.log('photo went wrong', e);
            org = null;
        }
        return org;
    }

    public getEmail() {
        let org = null;
        try {
            org = this.currentUser.email;
        } catch (e) {
            // this.Log.log('photo went wrong', e);
            org = null;
        }
        return org;

    }

    public getPhoto() {
        let org = null;
        try {
            org = this.currentUser.photoUrl;
        } catch (e) {
            // this.Log.log('photo went wrong', e);
            org = null;
        }
        return org;
    }

    public getUid() {
        let org = null;
        try {
            org = this.currentUser.uId;
        } catch (e) {
            org = null;
        }
        return org;
    }

    public getUser() {
        return this.currentUser;
    }

    public setUser(user) {
        var backendUser = new User("PENqt7wPvgeBKSui90o0XtOb51K3","Timothy Tseng");
        backendUser.age = 10;
        backendUser.parents = [new User("1", "Henk"), new User("2", "Piet"), new User("3", "Jan")];
        backendUser.children = [new User("13", "Summer"),new User("12", "Autumn"), new User("11", "Winter"), new User("10", "Spring")];
        backendUser.location = "Amsterdam, Nederland";
        backendUser.watcherType = 0;

        this.userMapping(user, backendUser);
        console.log('this.isAuthenticated tokens en shit', this.currentUser);
    }

    private userMapping(googleUser, backendUser){
        if(googleUser == null){
            var user =  this._registerUser.getOrRegister("PENqt7wPvgeBKSui90o0XtOb51K3", "Timothy Tseng", "tvcstseng@gmail.com")
        .subscribe((backendUser) => { 
            var user = new User("PENqt7wPvgeBKSui90o0XtOb51K3", "Timothy Tseng");
            user.email =  "tvcstseng@gmail.com"
            user.photoUrl = "";
            
            user.location = backendUser.location;
            user.age = backendUser.age;
            user.parents = backendUser.parents;
            user.children = backendUser.children;
            user.watcherType = backendUser.watcherType;

         });
        }
        else {
            var user = this._registerUser.getOrRegister(googleUser.uid, googleUser.displayName, googleUser.email)
            .subscribe((backendUser) => { 

                var user = new User(googleUser.uid, googleUser.displayName);
                user.uId = googleUser.uid;
                user.fullName = googleUser.displayName;
                user.email = googleUser.email;
                user.photoUrl = googleUser.photoURL;
                
                user.location = backendUser.location;
                user.age = backendUser.age;
                user.parents = backendUser.parents;
                user.children = backendUser.children;
                user.watcherType = backendUser.watcherType;

                this.currentUser = user;
            });
        }
    }

    public isLoggedIn() {
        if (this.currentUser === null || this.currentUser === undefined) {
            return false;
        }
        return true;
    }
}

