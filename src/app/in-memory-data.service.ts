import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
    public createDb() {
        const api =
            {
                quote: {
                    quote:'激ネムざうるす',
                    author: 'Ms. Yamma',
                    category: 'sample'
                }
            };
        return api;
    }
    
}
