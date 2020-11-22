import {createReducer,on, createAction, createFeatureSelector, createSelector} from '@ngrx/store';
import {  PurchasesState } from './purchase.model';
import * as AppState from './../../state/app.state';
import * as PurchaseActions from './purchase.actions';

// increases the State structure to use on lazy load of modules
export interface State extends AppState.State{
    purchases: PurchasesState,
}
 const initialState: PurchasesState = {
    purchases: [],
    currentPurchaseId:null,
    currrentPurchase:null,
    canAddPurchase: true
}

export const purchaseReducer = createReducer<PurchasesState>(
    initialState,
    on(PurchaseActions.toggleButtonAddPurchase,(state):PurchasesState=>{
        return {
            ...state,
            canAddPurchase: !state.canAddPurchase
        }
    }),
    on(PurchaseActions.initCurrentPurchase,(state):PurchasesState=>{
        return {
            ...state,
            currrentPurchase: {
                identifier: "0",
                ammount: "0",
                date: new Date().toDateString()
            }
        }
    })
);