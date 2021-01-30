import { createAction, props } from '@ngrx/store';
import { App,NavigationState,Page } from './app.model';

// Local actions
export const setCurrentPage = createAction('[Navigation] Set Current Page',props<{
    currentPage: Page
}>());
