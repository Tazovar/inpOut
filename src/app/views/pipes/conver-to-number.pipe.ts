import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converToNumber'
})
export class ConverToNumberPipe implements PipeTransform {

  transform(value:string): unknown {
    if(typeof value == 'string'){

      if(isNaN(Number(value))){
        return 'მოცემული სტრინგი ვერ გადაკონვერტირდება რიცხვად'
      }
      return parseInt(value) + 'ეს არის უკვე რიცხვი'
    }

    return value
  }

}
