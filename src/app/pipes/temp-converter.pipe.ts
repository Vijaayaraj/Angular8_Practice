import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, formatType: string, isFormatAllowed?: boolean): string {

    let format: string;
    let calculatedValue: number;
    let parsedValue: string;

    if (formatType === 'C2F') {
       calculatedValue = (value * 9/5) + 32;(value - 32) * 5/9;
       format = ' deg F';
    } else if (formatType === 'F2C') {
      calculatedValue = (value - 32) * 5/9;
      format = ' deg C';
    }

    if (isFormatAllowed) {
      parsedValue =  calculatedValue + format;
    } else {
      parsedValue =  calculatedValue.toString();
    }

    return parsedValue;
  }
}
