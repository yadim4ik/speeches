import {Component, Input, OnInit} from '@angular/core';
import {SpeechesService} from '../speeches.service';
import {SpeechModel} from '../models/SpeechModel';


/**
 * Reusable component for showing list of speeches
 *
 * @input searchText - string for filtering speeches by title
 *
 * Usage without filtering:
 * <app-speeches></app-speeches>
 *
 * Usage with filtering:
 * <app-speeches [searchText]="string"></app-speeches>
 */
@Component({
  selector: 'app-speeches',
  template: `
    <div class="list-group">
      <a *ngFor="let speech of speeches | filterSpeeches:searchText"
         [routerLink]="['/', 'speech', speech.id]"
         routerLinkActive="active"
         class="list-group-item"
      >{{speech.title}}</a>
    </div>
  `
})
export class SpeechesComponent implements OnInit {
  @Input() searchText = '';
  speeches: SpeechModel[];

  constructor(private speechesService: SpeechesService) {}

  ngOnInit() {
    this.speechesService.getSpeeches()
      .subscribe((speeches) => {
        this.speeches = speeches;
      });
  }
}
