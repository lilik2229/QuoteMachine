import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/interval';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuoteComponent } from './quote.component';
import { Quote } from '../quote';
import { ApiService } from '../api.service';

/**       
 * ApiServiceのスタブ
 */  
class apiServiceStub {
    get(){
        return Observable.of(
            {
                "quote": "sample quote",
                "author" : "me",
                "category": "movie"
            }
        )
    }
}

/**       
 * QuoteComponentのテスト
 * テスト項目
 *  - 1. コンポーネントの生成
 *  - 2. updateQuote()のテスト
 */  
describe('QuoteComponent', () => {
    let component: QuoteComponent;
    let fixture: ComponentFixture<QuoteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule
            ],
            declarations: [ QuoteComponent ],
            providers:    [
                {provide: ApiService, useClass: apiServiceStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /**       
     * テスト項目
     *  - 1. コンポーネントの生成
     */  
    it('#should create', () => {
        expect(component).toBeTruthy();
    });

    /**       
     * テスト項目
     *  - 2. updateQuote()のテスト
     */  
    it('#updateQuote() should make shouldToggle true', () => {
        component.updateQuote();
        fixture.detectChanges();

        /* shouldToggleの値はtrue */
        expect(component.shouldToggle).toBe(true);

        /* quoteの値は取得した名言(apiServiceStubの値)*/
        expect(component.quote.quote).toBe('sample quote');
        expect(component.quote.author).toBe('me');
        expect(component.quote.category).toBe('movie');
    });

});
