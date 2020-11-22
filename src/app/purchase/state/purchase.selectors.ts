import { createFeatureSelector, createSelector} from '@ngrx/store';
import {  PurchasesState } from './purchase.model';

const getPurchasesFeatureState = createFeatureSelector<PurchasesState>('purchases');

// Selectors for every field on Purchases state, to optmize the state
export const getPurchases = createSelector(
    getPurchasesFeatureState,
    state => state.purchases);

export const getCurrentPurchaseId = createSelector(
    getPurchasesFeatureState,
    state => state.currentPurchaseId);

// Retrieving the object from local array of Purchases by identifier
export const getCurrentPurchase = createSelector(
    getPurchasesFeatureState,
    getCurrentPurchaseId,
    (state, currentPurchaseId)=> state.purchases.find(p=> p.identifier === currentPurchaseId)
);

export const getCanAddPurchase = createSelector(
    getPurchasesFeatureState,
    state => state.canAddPurchase);
