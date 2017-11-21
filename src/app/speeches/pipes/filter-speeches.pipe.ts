import {Pipe, PipeTransform} from '@angular/core';

import {SpeechModel} from '../models/SpeechModel';


/**
 * Pipe filter speeches list by title.
 *
 * Usage:
 *   *ngFor="let speech of speeches | filterSpeeches:searchText"
 */
@Pipe({
  name: 'filterSpeeches'
})
export class FilterSpeechesPipe implements PipeTransform {
  transform(speeches: SpeechModel[], title: string): any {
    if (title) {
      return speeches.filter((speech) => speech.title.match(title));
    }
    return speeches;
  }

}
