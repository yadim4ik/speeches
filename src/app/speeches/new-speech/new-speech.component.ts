import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {SpeechesService} from '../speeches.service';
import {SpeechModel} from '../models/SpeechModel';


/**
 * Routing component for creating new speech
 */
@Component({
  selector: 'app-new-speech-component',
  template: `
    <div>
      <app-speech-form [speech]="speech"></app-speech-form>
      <button class="btn btn-success" type="button" (click)="createSpeech()">create</button>
    </div>
  `
})
export class NewSpeechComponent {
  speech: SpeechModel;

  constructor(
    private router: Router,
    private speechesService: SpeechesService
  ) {
    this.speech = new SpeechModel();
  }

  /**
   * Method for creating new speech
   * After creating redirect to it`s detail page
   */
  createSpeech() {
    this.speechesService.createSpeech(this.speech)
      .subscribe((speech) => {
        this.router.navigate(['/speech', speech.id]);
      });
  }
}
