import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null) return;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  }
