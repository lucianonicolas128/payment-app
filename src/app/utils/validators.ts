import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isMonthValid(control: AbstractControl) {
    if(control.value){
      const value = control.value;
      let expiredDate = new Date(value);
      let actuallyDate = new Date(); 
      if (value && value <= actuallyDate.getFullYear()) {
        console.log('Date false')
        return { month_invalid: true };
      }
      else {
        console.log('Date true')
      }
    }
    return null;
  }

  static maxLengthCardNumber(control: AbstractControl){
    if(control.value){
      const value = control.value;
      if(value.toString().length != 16){
        return { card_invalid: true };
      }
    }
    return null;
  }

}
