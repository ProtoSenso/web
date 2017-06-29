import { Injectable } from '@angular/core';
import { tempature } from '../../dto/sensors/tempature';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Singleton } from '../config';

@Injectable()
export class TempatureService {

    constructor(private http: Http) {}

    private baseUrl = Singleton.getHost();
    private tempaturesUrl = 'api/temperature_readings/'; // URL to web API
    
    listTempatures(): Observable<tempature[]> {
        var url = Singleton.getHost() + this.tempaturesUrl;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
        let options = new RequestOptions({headers: headers})
        return this.http.get(url, options)
                  .map(res => this.extractData(res))
                  .catch((error) => this.handleError(error));
    } 


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}