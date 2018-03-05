import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { ApiService } from './api.service';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        environment.production ?
            []:HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay: 1500})
    ],
    providers: [
        ApiService,
        InMemoryDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
