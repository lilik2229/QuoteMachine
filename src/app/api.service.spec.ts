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

    it('should be created', () => {
        expect(apiService).toBeTruthy();
    });

});
