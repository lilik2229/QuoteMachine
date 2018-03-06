import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

/**       
 * 名言APIのスタブ
 */
@Injectable()
export class InMemoryDataService implements InMemoryDbService{
    public createDb() {
        /**       
         * 返却値の設定
         * api.quote以下は<Quote>を想定
         */
        const api =
            {
                quote: {
                    quote:'samplesamplesample',
                    author: 'Ms. author',
                    category: 'sample'
                }
            };
        return api;
    }
    
}
