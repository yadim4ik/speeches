import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CollapseModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {SpeechesModule} from './speeches/speeches.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserModule,
    SpeechesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
