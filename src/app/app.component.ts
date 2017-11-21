import {Component} from '@angular/core';
import {SpeechesService} from './speeches/speeches.service';

/**
 *  Root component for application
 */
@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpeechesService]
})
export class AppComponent {
  isCollapsed = true;
}
