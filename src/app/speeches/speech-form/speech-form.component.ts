import {Component, Input, OnInit} from '@angular/core';

import {SpeechModel} from '../models/SpeechModel';
import {SpeechesService} from '../speeches.service';


/**
 *  Reusable speech form component for creating and updating speech data
 *
 *  @input speech - speech data
 *
 * Usage:
 * <app-speech-form [speech]="SpeechModel"></app-speech-form>
 */
@Component({
  selector: 'app-speech-form',
  templateUrl: './speech-form.component.html',
  styleUrls: ['./speech-form.component.css']
})
export class SpeechFormComponent implements OnInit {
  @Input() speech: SpeechModel;
  users: Object[];

  constructor(private speechesService: SpeechesService) {}

  ngOnInit() {
    this.speechesService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });
  }

  transformTagsToArray(value) {
    this.speech.tags = value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag !== '');
  }

  updateUsers(event) {
    this.speech.users.push(event.value);
  }

  unassign(user) {
    this.speech.users.splice(this.speech.users.indexOf(user), 1);
  }
}
