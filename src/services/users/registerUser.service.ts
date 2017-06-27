import { Injectable } from '@angular/core';
import { User } from '../../dto/users/user';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegisterUserService {

    private baseUrl = 'http://192.168.1.164:9080/';
    private getUserUrl = 'api/user/'; 
    private registerParentUrl = 'api/follower/';

    constructor(private http: Http) {
    }

/*'Content-Type': 'application/json;charset=UTF-8',
                                    'Access-Control-Allow-Origin': '*', 
                                    'Access-Control-Allow-Methods': 'POST'
 */

    getOrRegister(uId: string, name:string, email: string): Observable<User> {
        var url = this.baseUrl + this.getUserUrl;
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
         var url = this.baseUrl + this.registerParentUrl + "/" + uIdchild +"/" + uIdParent;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({headers: headers})

        return this.http.get(url, 
                            options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error.json());
    }
}