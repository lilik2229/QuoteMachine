import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    private quote = new Quote();
    
    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.apiService
            .get()
            .subscribe(
                res=>{
                    this.quote = res;
                    console.log(this.quote);
                }
            );
    }
}
