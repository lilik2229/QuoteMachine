import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
    public createDb() {
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
