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
    private randomColor;
    private colorList =[
        'Aqua',
        'DarkGreen',
        'DarkBlue',
        'HotPink',
        'Purple',
        'RosyBrown'
    ];
    
    constructor(
        private apiService: ApiService
    ) { }

    private getRandomColor(){
        return this.colorList[
            Math.floor(Math.random()*(this.colorList.length))
        ];
    }
    
    private setColor(){
        const color= this.getRandomColor();
        console.log(color);
        this.randomColor=color;
        document.body.style.background=color;
    }
    
    ngOnInit() {
        this.setColor();
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
