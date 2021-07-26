import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
  pure: false,
})
export class MomentPipe implements PipeTransform {
  transform(
    value: Date | moment.Moment | null,
    dateFormat: string = 'MMMM YYYY'
  ): any {
    return moment(value).format(dateFormat);
  }
}
