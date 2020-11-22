import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/purchase.reducer';
import { getCanAddPurchase } from '../state/purchase.selectors';
import * as PurchaseActions from '../state/purchase.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isPastDate } from 'src/app/shared/validators/date.validators';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewPurchaseComponent implements OnInit, AfterViewInit {

  canAddPurchase:boolean = false;
  isFormSubmitted:boolean = false;

  // form fields
  dateField: FormControl = new FormControl();
  ammountField:FormControl  = new FormControl();
  codeField:FormControl = new FormControl();

  form: FormGroup;

  get formNewControls(){
    return this.form.controls;
  }

  constructor( private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(getCanAddPurchase).subscribe(canAddPurchase=>this.canAddPurchase = canAddPurchase);
    
    debugger
    this.buildFormValidators();
    this.buildFormEvents();

    this.form = this.buildForm();
    
  }
  
  ngAfterViewInit(): void {
    
  }

  toggleCanPurchase(){
   this.store.dispatch(PurchaseActions.toggleButtonAddPurchase());
  }

  buildForm(){    
    return  new FormGroup({
      date: this.dateField,
      ammount: this.ammountField,
      code: this.codeField
    })
  }

  buildFormEvents(){
    this.ammountField.valueChanges.subscribe(value=>{
      console.log('value ammount:',value)
    });
  }

  buildFormValidators(){
    this.ammountField.setValidators(
      [Validators.required,
      Validators.minLength(0.1)]
    );

    this.dateField.setValidators(
      [Validators.required,
      isPastDate]
    );

    this.codeField.setValidators(Validators.required);

  }

  submitNewPurchase(){

    console.log('submited');
    this.isFormSubmitted = true;

    if(!this.form.invalid){
      // TODO: Send values to store
      console.log('form values can be submitted');
    }

  }
}
