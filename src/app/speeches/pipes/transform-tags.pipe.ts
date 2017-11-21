import { Pipe, PipeTransform } from '@angular/core';


/**
 * Pipe for transforming array of tags to string
 *
 * Usage:
 *   {{speech.tags | transformTags}}
 */
@Pipe({
  name: 'transformTags'
})
export class TransformTagsPipe implements PipeTransform {
  transform(tags: string[], args?: any): string {
    tags = tags || [];
    return tags.join(', ');
  }
}
