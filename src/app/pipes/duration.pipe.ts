import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  /**
   * If input is invalid, the pipe returns "~:~"
   * @param value
   * @returns
   */
  transform(value: number | undefined): string {
    //Value is in minutes
    let output = "~:~";
    if(value!==undefined){
      const hours = Math.floor(value/60);
      const minutes = value%60;
      output = `${hours}h ${minutes}m`;
    }
    return output;
  }

}
