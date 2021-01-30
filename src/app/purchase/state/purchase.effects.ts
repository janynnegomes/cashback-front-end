import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PurchaseService } from 'src/app/services/purchases.service';
import * as PurchaseActions from '../state/purchase.actions';
import { catchError, map, mergeMap}  from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PurchaseEffects{
    constructor( private actions$:Actions,
        private purchaseService: PurchaseService){
    }

    loadPurchases$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(PurchaseActions.loadPurchases),
            mergeMap(()=>{
                return this.purchaseService.getPurchases().pipe(
                    map( purchases=> PurchaseActions.loadPurchasesSuccess({purchases})),
                    catchError(error=>of(PurchaseActions.loadPurchasesFail({error})))
                )
            })
        )
    })
}