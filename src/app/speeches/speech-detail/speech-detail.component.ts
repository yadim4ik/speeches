import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {SpeechModel} from '../models/SpeechModel';
import {SpeechesService} from '../speeches.service';


/**
 * Routing component for displaying/updating/deleting speech
 */
@Component({
  selector: 'app-speech-detail',
  templateUrl: './speech-detail.component.html'
})
export class SpeechDetailComponent implements OnInit {
  speech: SpeechModel;
  showAlert = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private speechService: SpeechesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadData(parseInt(params.id, 10));
    });
  }

  /**
   * Method for loaging speech data from service
   *
   * @param speechId - id of speech
   */
  loadData(speechId) {
    this.speechService.getSpeech(speechId)
      .subscribe((speech: SpeechModel) => {
        this.speech = speech;
      });
  }

  /**
   * Method for saving speech data after update
   */
  saveSpeech() {
    this.speechService.saveSpeech(this.speech)
      .subscribe(() => {
        this.showAlert = true;
      });
  }

  /**
   * Method for deleting speech
   * After deleting redirect to list speeches page
   */
  deleteSpeech() {
    this.speechService.deleteSpeech(this.speech.id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
