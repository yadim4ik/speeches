import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {SpeechModel} from './models/SpeechModel';


/**
 * Speeches Service
 * Service provides functions for operations with Speeches data
 */
@Injectable()
export class SpeechesService {
  constructor(private http: Http) {}

  /**
   * Get Speeches
   *
   * @returns list of all speeches
   */
  getSpeeches(): Observable<SpeechModel[]> {
    if (localStorage.getItem('speeches')) {
      return Observable.of(JSON.parse(localStorage.getItem('speeches')));
    }

    return this.http.get('assets/data.json')
      .map((speeches) => speeches.json())
      .map((speeches) => {
        localStorage.setItem('speeches', JSON.stringify(speeches));
        return speeches;
      });
  }

  /**
   * Get Users
   *
   * @returns list of users for assigning them to speech
   */
  getUsers(): Observable<string[]> {
    if (localStorage.getItem('users')) {
      return Observable.of(JSON.parse(localStorage.getItem('users')));
    }

    return this.http.get('assets/users.json')
      .map((users) => users.json())
      .map((users) => {
        localStorage.setItem('users', JSON.stringify(users));
        return users;
      });
  }

  /**
   * Get speech by id
   *
   * @param speechId - id of speech
   * @returns speech data
   */
  getSpeech(speechId: number): Observable<SpeechModel> {
    return this.getSpeeches()
      .map((speeches) => {
        const filtered = speeches.filter((speech) => speech.id === speechId);
        return filtered[0];
      });
  }

  /**
   * Save speech data
   *
   * @param speech - speech data for updating
   * @returns updated speech
   */
  saveSpeech(speech: SpeechModel): Observable<SpeechModel> {
    const speeches = JSON.parse(localStorage.getItem('speeches'));
    const index = speeches.findIndex((el) => el.id === speech.id);

    speeches[index] = speech;
    localStorage.setItem('speeches', JSON.stringify(speeches));

    return Observable.of(speech);
  }

  /**
   * Deleting speech by id
   *
   * @param speechId - speech id for deleting
   * @returns boolean
   */
  deleteSpeech(speechId: number): Observable<boolean> {
    const speeches = JSON.parse(localStorage.getItem('speeches'));
    const index = speeches.findIndex((el) => el.id === speechId);

    speeches.splice(index, 1);

    localStorage.setItem('speeches', JSON.stringify(speeches));
    return Observable.of(true);
  }

  /**
   * Create new speech
   *
   * @param speech - speech data for creating new speech
   * @returns created speech data
   */
  createSpeech(speech: SpeechModel): Observable<SpeechModel> {
    const speeches = JSON.parse(localStorage.getItem('speeches'));

    const maxIndex = speeches.reduce((current, item) => item.id > current ? item.id : current , 0);
    speech.id = maxIndex + 1;

    speeches.push(speech);
    localStorage.setItem('speeches', JSON.stringify(speeches));

    return Observable.of(speech);
  }
}
