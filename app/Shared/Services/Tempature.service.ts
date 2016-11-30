import { Injectable } from '@angular/core';
import { Tempature } from '../Dto/Tempature';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TempatureService {


    constructor(private http: Http) {}

    private baseUrl = 'http://192.168.1.65:9080/';
    private tempaturesUrl = 'api/books/'; // URL to web API
    
    listTempatures(): Observable<Tempature[]> {

        var url = this.baseUrl + this.tempaturesUrl;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
        let options = new RequestOptions({headers: headers})
        return this.http.get('http://192.168.1.65:9080/api/temperature_readings', options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    } 


    private extractData(res: Response) {
        console.log("api results: ");
        console.log(res);
        
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}