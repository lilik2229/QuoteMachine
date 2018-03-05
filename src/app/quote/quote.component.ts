import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    query,
    stagger
} from '@angular/animations';

import { Quote } from '../quote';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css'],
    animations: [
        trigger('toggleState', [
            state('true' , style({ opacity:1.0 })),
            state('false', style({ opacity:0.0 })),
            transition('* => *', animate('1000ms'))
        ])
    ]
})

export class QuoteComponent implements OnInit{
    quote = new Quote();
    autoQuote;
    randomColor;
    colorList =[
        'Aqua',
        'DarkGreen',
        'DarkBlue',
        'HotPink',
        'Purple',
        'RosyBrown'
    ];
    interval=10000;
    shouldToggle=false;
    
    constructor(
        private apiService: ApiService
    ) { }
    
    getRandomColor(){
        return this.colorList[
            Math.floor(Math.random()*(this.colorList.length))
        ];
    }
    
    setColor(){
        const color= this.getRandomColor();
        this.randomColor=color;
        document.body.style.background=color;
    }
    
    updateQuote(){
        this.shouldToggle = false;
        this.apiService
            .get()
            .subscribe(
                res=>{
                    this.quote = res;
                    this.setColor();
                    this.shouldToggle = true;
                }
            );
    }
    
    ngOnInit() {
        this.updateQuote();
        this.autoQuote = Observable
            .interval(this.interval)
            .subscribe(
                ()=>{
                    this.updateQuote();
                }
            );
    }

}
