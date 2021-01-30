import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPurchasesComponent } from './list.component';
import { ListPurchasesRoutingModule } from './list-routing.module';



@NgModule({
  declarations: [ListPurchasesComponent],
  imports: [
    CommonModule,
    ListPurchasesRoutingModule
  ]
})
export class ListModule { }
