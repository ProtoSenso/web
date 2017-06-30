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

    public setUser(user): User {
        this.currentUser = user;
        console.log('this.isAuthenticated tokens en shit', this.currentUser);

        var followe = new User();
        followe.firstName = "Timothy";
        followe.lastName = "Tseng";
        followe.age = 46;
        
        this.currentUser.followee = [];
        this.currentUser.followee.push(followe);
        return this.currentUser;
    }

    public isLoggedIn() {
        if (this.currentUser === null || this.currentUser === undefined) {
            return false;
        }
        return true;
    }
}

