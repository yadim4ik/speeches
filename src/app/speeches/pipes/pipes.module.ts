import {NgModule} from '@angular/core';

import {FilterSpeechesPipe} from './filter-speeches.pipe';
import {TransformTagsPipe} from './transform-tags.pipe';
import {FilterUsersPipe} from './filter-users.pipe';


@NgModule({
  exports: [
    FilterSpeechesPipe,
    TransformTagsPipe,
    FilterUsersPipe
  ],
  declarations: [
    FilterSpeechesPipe,
    TransformTagsPipe,
    FilterUsersPipe
  ]
})
export class SpeechesPipesModule {}
