import {Pipe, PipeTransform} from '@angular/core';


/**
 * Pipe exclude assigned users from users list
 *
 * Usage:
 *   {{users | filterUsers:speech.users}}
 */
@Pipe({
  name: 'filterUsers',
  pure: false
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: any[], checked: any[]): any {
    if (checked.length) {
      return users.filter((user) => checked.indexOf(user.email) === -1);
    }
    return users;
  }

}
