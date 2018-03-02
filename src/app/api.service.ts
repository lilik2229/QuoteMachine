import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Quote } from './quote';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Mashape-Key':''
    })
};

@Injectable()
export class ApiService {
    private quoteUrl='';
    
    constructor(
        private http: HttpClient
    ){}

    get(){
        return this.http.get<Quote>(this.quoteUrl,httpOptions);
    }
}

