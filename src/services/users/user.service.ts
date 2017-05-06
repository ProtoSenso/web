import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private currentUser: any;

    constructor() { }

    public getName() {
        let org = null;
        try {
            org = this.currentUser.auth.displayName;
        } catch (e) {
            // this.Log.log('photo went wrong', e);
            org = null;
        }
        return org;
    }

    public getEmail() {
        let org = null;
        try {
            org = this.currentUser.auth.email;
        } catch (e) {
            // this.Log.log('photo went wrong', e);
            org = null;
        }
        return org;

    }

    public getPhoto() {
        let org = null;
        try {
            org = this.currentUser.auth.photoURL;
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
            // this.Log.log('photo went wrong', e);
            org = null;
        }
        return org;
    }

    public getUser() {
        return this.currentUser;
    }

    public setUser(user) {
        this.currentUser = user;
        console.log('this.isAuthenticated tokens en shit', this.currentUser);
    }

    public isLoggedIn() {
        console.log('currentUser', this.currentUser);

        if (this.currentUser === null || this.currentUser === undefined) {
            return false;
        }
        return true;
    }
}

