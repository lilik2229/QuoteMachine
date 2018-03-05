import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/interval';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { QuoteComponent } from './quote.component';
import { Quote } from '../quote';
import { ApiService } from '../api.service';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
