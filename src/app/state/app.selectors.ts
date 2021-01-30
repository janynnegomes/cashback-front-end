import { createFeatureSelector, createSelector} from '@ngrx/store';
import { State } from './app.state';

const getAppState = createFeatureSelector<State>('app');

// Selectors for every field on app state, to optmize the state
export const getNavigation = createSelector(
    getAppState,
    state => state.navigation);

export const getError = createSelector(
    getAppState,
    state => state.error);
