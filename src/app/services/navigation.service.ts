import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppActions from '../state/app.actions';

@Injectable()
export class NavigationService{

    constructor(private router:Router, private store:Store){}
    navigate(url){
        this.store.dispatch(AppActions.setCurrentPage({currentPage:url}))
    }
}