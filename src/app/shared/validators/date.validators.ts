import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isPastDate(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  
        control.value? {isPastDate: new Date(control.value) <= new Date()}:null;
}