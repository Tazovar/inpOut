import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverter'
})
export class StringConverterPipe implements PipeTransform {
  transform(value: any, startIndex:any = 0): unknown {
    if(typeof value != 'string'){
      return 'invalid value'
    }else if(startIndex){
      if(typeof startIndex != 'number'){
        return 'invalid parameter index'
      }
    }


    return value.slice(startIndex,10000)


  }

}
