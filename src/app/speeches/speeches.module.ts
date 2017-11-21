import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  AlertModule,
  BsDatepickerModule,
  TypeaheadModule
} from 'ngx-bootstrap';

import {SpeechesPipesModule} from './pipes/pipes.module';
import {SpeechesRoutingModule} from './speeches.routing';

import {NewSpeechComponent} from './new-speech/new-speech.component';
import {SearchSpeechComponent} from './search-speech/search-speech.component';
import {SpeechesComponent} from './speeches/speeches.component';
import {SpeechDetailComponent} from './speech-detail/speech-detail.component';
import {SpeechFormComponent} from './speech-form/speech-form.component';


@NgModule({
  imports: [
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CommonModule,
    SpeechesRoutingModule,
    HttpModule,
    FormsModule,
    SpeechesPipesModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    NewSpeechComponent,
    SearchSpeechComponent,
    SpeechesComponent,
    SpeechDetailComponent,
    SpeechFormComponent
  ]
})
export class SpeechesModule {}
