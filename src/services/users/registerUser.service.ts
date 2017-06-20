import { Injectable } from '@angular/core';
import { User } from '../../dto/users/user';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterUserService {

    private baseUrl = 'http://192.168.1.185:9080/';
    private getUserUrl = 'api/user/'; 
    private registerParentUrl = 'api/user/register';

    constructor(private http: Http) {
    }

 
    getOrRegister(uId: string, name:string, email: string): Observable<User> {
        var url = this.baseUrl + this.getUserUrl;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8', 'type': 'post', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({headers: headers});
        console.log("Register user");
        var body = JSON.stringify({uId: uId, name: name, email: email});
        console.log(body);
        return this.http.post(url, body, options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    } 

    registerParent(uIdParent: string, uIdchild: string)
    {
         var url = this.baseUrl + this.registerParentUrl;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({headers: headers})
        return this.http.post(url, 
                            JSON.stringify({uIdParent: uIdParent, uIdchild: uIdchild}),
                            options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}