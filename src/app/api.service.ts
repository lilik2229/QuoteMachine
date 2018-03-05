import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Quote } from './quote';

/**       
 * リクエストヘッダの設定
 */  
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        /**       
         * api-keyは'../environments/environment.ts'で設定
         */  
        'X-Mashape-Key': environment.api.key
    })
};

/**       
 * 外部APIとの通信、設定を行うサービス
 */  
@Injectable()
export class ApiService {
    /**       
     * 外部APIのリクエストURL
     * @type {string}
     */  
    quoteUrl=environment.api.url;
   
    constructor(
        private http: HttpClient
    ){}

    /**       
     * APIからランダムに名言を取得する
     * @param なし
     * @return {Quote}
     */  
    get(){
        return this.http.get<Quote>(this.quoteUrl,httpOptions);
    }
}

