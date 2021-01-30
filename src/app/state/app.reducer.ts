import {createReducer,on, createAction, createFeatureSelector, createSelector} from '@ngrx/store';
import {  App} from './app.model';
import * as AppState from './app.state';
import * as AppActions from './app.actions';

// increases the State structure to use on lazy load of modules
export interface State extends AppState.State{

}
 const initialState: State = {
    navigation:{currentPage:'/'},
    error:null,
    user:null
}

export const appReducer = createReducer<State>(
    initialState,
    on(AppActions.setCurrentPage,(state, action):State=>{
        return {
            ...state,
            navigation: {...state.navigation, currentPage:action.currentPage }
        }
    })
);