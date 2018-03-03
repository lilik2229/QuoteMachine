// Http testing module and mocking controller
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service';
import { Quote } from './quote';

describe('ApiService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let apiService: ApiService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule
            ],
            providers: [
                ApiService
            ]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        apiService = TestBed.get(ApiService);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    
    describe('#created', () => {
        it('should be created', () => {
            expect(apiService).toBeTruthy();
        });
    });

    describe('#get()', () => {
        let expectedQuote: Quote;
        beforeEach(() => {
            apiService = TestBed.get(ApiService);
            expectedQuote = {
                quote:'samplesamplesample',
                author: 'Ms. author',
                category: 'sample'                
            } as Quote;
        });
        
        it('should return expected quote', () => {
            apiService.get().subscribe(
                quote =>
                    expect(quote)
                    .toEqual(expectedQuote, 'should return expected quote'),
                fail
            );

            const req = httpTestingController.expectOne(apiService.quoteUrl);
            expect(req.request.method).toEqual('GET');

            req.flush(expectedQuote);
        });
    });
});
