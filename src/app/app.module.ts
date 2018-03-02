import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { ApiService } from './api.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
