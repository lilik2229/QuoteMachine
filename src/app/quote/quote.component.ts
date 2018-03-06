import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {
    trigger,
    state,
    style,
    transition,
    animate
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

/**       
 * 名言を表示するコンポーネント
 */  
export class QuoteComponent implements OnInit{
    /**       
     * 表示する名言
     * @type {Quote}
     */  
    quote:Quote = new Quote();
    
    /**       
     * 現在の表示状態
     * @type {boolean}
     */  
    shouldToggle:boolean = false;

    /**       
     * 背景、文字色リスト
     * @type {string[]}
     */  
    private colorList:string[] = [
        'Aqua',
        'DarkGreen',
        'DarkBlue',
        'HotPink',
        'Purple',
        'RosyBrown'
    ];

    /**
     * 表示している背景、文字色
     * @type {string}
     */  
    private appColor:string;

    /**
     * 名言の更新周期[ms]
     * @type {number}
     */      
    private interval:number = 10000;
    
    constructor(
        private apiService: ApiService
    ) { }

    /**
     * 背景、及び文字色を変更する
     * @params {string} 変更する色
     */      
    private setColor(color:string){
        this.appColor=color;
        document.body.style.background=color;
    }
    
    /**
     * colorListからランダムに色を選択する
     * @params {string[]} 背景、文字色の候補リスト
     */      
    private getRandomColor(colorList:string[]){
        return colorList[
            Math.floor(Math.random()*(colorList.length))
        ];
    }

    /**
     * 名言を更新する
     * APIを実行し、quoteを更新する
     */      
    updateQuote(){
        /* 次の名言が取得できるまで、名言を非表示 */
        this.shouldToggle = false;
        this.apiService
            .get()
            .subscribe(
                res=>{
                    
                    /* 名言の更新 */
                    this.quote = res;
                    
                    /* 背景、文字色の設定 */
                    this.setColor(
                        this.getRandomColor(this.colorList)
                    );

                    /* 名言の表示 */
                    this.shouldToggle = true;
                }
            );
    }
    
    ngOnInit() {
        /* コンポーネント表示時に実施:名言の取得と表示 */
        this.updateQuote();

        /* intervalの値ごとに名言、背景色、文字色を更新 */
        Observable
            .interval(this.interval)
            .subscribe(
                ()=>{
                    this.updateQuote();
                }
            );
    }

}
