import { Injectable } from '@angular/core';
import { tempature } from '../../dto/sensors/tempature';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TempatureService {

    constructor(private http: Http) {}

    private baseUrl = 'http://192.168.1.164:9080/';
    private tempaturesUrl = 'api/temperature_readings/'; // URL to web API
    
    listTempatures(): Observable<tempature[]> {
        var url = this.baseUrl + this.tempaturesUrl;
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
        let options = new RequestOptions({headers: headers})
        return this.http.get(this.baseUrl + this.tempaturesUrl, options)
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