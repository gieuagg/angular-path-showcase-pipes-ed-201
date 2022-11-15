import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  constructor(private pipe: DatePipe) {
  }

  transform(value: Date, appendTime: boolean = false): unknown {
    if (appendTime) {
      return this.pipe.transform(value, "dd/MM/yyyy hh:mm:ss");
    } else {
      return this.pipe.transform(value, "dd/MM/yyyy");
    }
  }

}
