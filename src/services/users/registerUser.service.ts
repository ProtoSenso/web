import { Injectable } from '@angular/core';
import { User } from '../../dto/users/user';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterUserService {

    private baseUrl = 'http://192.168.1.185:9080/';
    private tempaturesUrl = 'api/user/'; 

    constructor(private http: Http) {
    }

 
    getOrRegister(uId: string, name:string, email: string): Observable<User> {
        var url = this.baseUrl + this.tempaturesUrl;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({headers: headers})
        return this.http.post(this.baseUrl + this.tempaturesUrl, 
                            JSON.stringify({uId: uId, name: name, email: email}),
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