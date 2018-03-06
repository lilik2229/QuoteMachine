import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

/**       
 * InMemoryDataServiceのテスト
 * テスト項目
 *  - 1. サービスの生成
 */  
describe('InMemoryDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InMemoryDataService]
        });
    });

    /**       
     * テスト項目
     *  - 1. サービスの生成
     */  
    it('should be created',
       inject([InMemoryDataService], (service: InMemoryDataService) => {
           expect(service).toBeTruthy();
       }));
});
