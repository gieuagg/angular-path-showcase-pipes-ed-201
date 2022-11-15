import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BuiltInComponent} from './built-in/built-in.component';
import {TextTransformPipe} from './custom/custom-pipes/text-transform.pipe';
import {CustomComponent} from './custom/custom.component';
import {DateTransformPipe} from './custom/custom-pipes/date-transform.pipe';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    BuiltInComponent,
    TextTransformPipe,
    CustomComponent,
    DateTransformPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
