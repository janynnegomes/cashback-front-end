import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';

import { StoreModule} from '@ngrx/store'
import { purchaseReducer } from './state/purchase.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    StoreModule.forFeature('purchases',purchaseReducer)
  ]
})
export class PurchaseModule { }
