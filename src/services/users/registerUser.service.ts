import { Injectable } from '@angular/core';
import { User } from '../../dto/users/user';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Singleton } from '../config';

@Injectable()
export class UserManagementService {

    
    private getUserUrl = 'api/users/'; 
    private registerParentUrl = 'api/followee/';
    private userUrl = 'api/user';

    constructor(private http: Http) {
    }

    getUser(email:string, password: string): Observable<User> {
        /*
        var url = Singleton.getHost() + this.getUserUrl;
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        var body = JSON.stringify({email: email, password: password});

        return this.http.post(url, body, options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
                  */
        var encodeEmail = btoa(email);
        var url = Singleton.getHost() + this.getUserUrl + encodeEmail;
        let headers = new Headers({ 'Content-Type': 'application/json;'});
        let options = new RequestOptions({headers: headers})

        return this.http.get(url, 
                            options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    }

    getOrRegister(uId: string, name:string, email: string): Observable<User> {
        var url = Singleton.getHost() + this.getUserUrl;
        console.log(url);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        var body = JSON.stringify({uid: uId, 
                                firstName: name.substr(0, name.indexOf(' ')), 
                                lastName: name.substr(name.indexOf(' ')+1), 
                                email: email,
                                photoUrl: ''});

        return this.http.post(url, body, options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    } 

    registerParent(uIdParent: string, uIdchild: string)
    {
        var url = Singleton.getHost() + this.registerParentUrl + btoa(uIdchild) +"/" + btoa(uIdParent);
        let headers = new Headers({ 'Content-Type': 'application/json;', });
        let options = new RequestOptions({headers: headers})

        return this.http.get(url, 
                            options)
                  .map(res => <User>res.json())
                  .catch((error) => this.handleError(error));
    }

    addUser(body: Object): Observable<User> {
        // const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        const options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(Singleton.getHost() + this.userUrl, body, options) // ...using post request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    // Update a user
    updateUser(body: Object): Observable<User[]> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        const options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.put(Singleton.getHost() + `${this.userUrl}/${body['id']}`, body, options) // ...using put request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    // Delete a user
    removeUser(id: string): Observable<User[]> {
        return this.http.delete(Singleton.getHost() + `${this.userUrl}/${id}`) // ...using put request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error.json());
    }
}