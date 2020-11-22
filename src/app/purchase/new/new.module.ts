import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPurchaseRoutingModule } from './new-routing.module';
import { NewPurchaseComponent } from './new.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewPurchaseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewPurchaseRoutingModule
  ]
})
export class NewModule { }
