import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

/**       
 * Quoteコンポーネントのスタブ
 */  
@Component({selector: 'app-quote', template: ''})
class QuoteStubComponent {}

/**       
 * AppComponentのテスト
 * テスト項目
 *  - 1. コンポーネントの生成
 *  - 2. 作者名の表示
 */  
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                QuoteStubComponent
            ],
        }).compileComponents();
    }));

    /**       
     * テスト項目
     *  - 1. コンポーネントの生成
     */  
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
