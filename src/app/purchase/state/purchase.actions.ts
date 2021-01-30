import { createAction, props } from '@ngrx/store';
import { Purchase } from './purchase.model';

// Local actions
export const toggleButtonAddPurchase = createAction('[Purchase] Toggle Button Add Purchase');

export const setCurrentPurchase = createAction('[Purchase] Set Current Purchase',props<{
    purchase: Purchase
}>());

export const addNewPurchase = createAction('[Purchase] Add New Purchase',props<{
    purchase: Purchase
}>());

export const clearCurrentPurchase = createAction('[Purchase] Clear Current Purchase');
export const initCurrentPurchase = createAction('[Purchase] Init Current Purchase');

// API actions
export const loadPurchases = createAction('[Purchase] Load Purchases');

export const loadPurchasesSuccess = createAction('[Purchase] Load Purchases Success',props<{
    purchases: Purchase[]
}>());

export const loadPurchasesFail = createAction('[Purchase] Load Purchases Fail',props<{
    error: any }>());