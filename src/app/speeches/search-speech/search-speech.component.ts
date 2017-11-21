import {Component, OnInit} from '@angular/core';

import {SpeechModel} from '../models/SpeechModel';
import {SpeechesService} from '../speeches.service';


/**
 * Routing component for filtering speeches
 */
@Component({
  selector: 'app-search-speech',
  template: `
    <div class="form-group">
      <input class="form-control" type="text" [(ngModel)]="searchTitle">
      <p class="help-block">Start typing title of project</p>
    </div>

    <app-speeches [searchText]="searchTitle"></app-speeches>
  `
})
export class SearchSpeechComponent implements OnInit {
  speeches: SpeechModel[];
  searchTitle: string;

  constructor(
    private speechesService: SpeechesService
  ) {
    this.speeches = [];
  }

  ngOnInit() {
    this.speechesService.getSpeeches()
      .subscribe((speeches) => {
        this.speeches = speeches;
      });
  }
}
