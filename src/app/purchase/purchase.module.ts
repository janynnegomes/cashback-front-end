import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';

import { StoreModule} from '@ngrx/store'
import { purchaseReducer } from './state/purchase.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PurchaseEffects } from './state/purchase.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    StoreModule.forFeature('purchases',purchaseReducer),
    EffectsModule.forFeature([PurchaseEffects])
  ]
})
export class PurchaseModule { }
