import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeechesComponent} from './speeches/speeches.component';
import {NewSpeechComponent} from './new-speech/new-speech.component';
import {SpeechDetailComponent} from './speech-detail/speech-detail.component';
import {SearchSpeechComponent} from './search-speech/search-speech.component';


const routes: Routes = [
    {
      path: '',
      component: SpeechesComponent
    },
    {
      path: 'speech/:id',
      component: SpeechDetailComponent
    },
    {
      path: 'new',
      component: NewSpeechComponent
    },
    {
      path: 'search',
      component: SearchSpeechComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechesRoutingModule {}
