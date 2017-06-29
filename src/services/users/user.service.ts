import { Injectable } from '@angular/core';
import { User } from '../../dto/users/user';
import { UserManagementService } from './registerUser.service';

@Injectable()
export class UserService {

    private currentUser: User;

    constructor(public _registerUser: UserManagementService) { 
        this.currentUser = new User();
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
            org = this.currentUser.uid;
        } catch (e) {
            org = null;
        }
        return org;
    }

    public getUser() {
        return this.currentUser;
    }

    public setUser(user) {
        var userBert = new User();
        userBert.firstName = "Bert";
        userBert.lastName = "is de beste";


        var userLeo = new User();
        userLeo.firstName = "Leo";
        userLeo.lastName = "mag er ook best zijn";

        var user2 = new User();
        user2.uid = "bartcvink@hotmail.com";
        user2.email = "bartcvink@hotmail.com";
        user2.firstName = "Bart";
        user2.lastName = "Vink";
        user2.age = 23;
        user2.parents = [userBert, userLeo];
        user2.watcherType = 0;

        this.currentUser = user2;
        console.log('this.isAuthenticated tokens en shit', this.currentUser);
    }

    public isLoggedIn() {
        if (this.currentUser === null || this.currentUser === undefined) {
            return false;
        }
        return true;
    }
}

