import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string, type: string = "lower"): string {
    switch (type) {
      case "lower": {
        return value.toLowerCase();
      }
      case "upper": {
        return value.toUpperCase()
      }
      default: {
        return value;
      }
    }
  }

}
