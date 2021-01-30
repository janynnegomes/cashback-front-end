import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Purchase } from '../state/purchase.model';
import * as PurchaseActions from '../state/purchase.actions';
import { getError, getPurchases } from '../state/purchase.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPurchasesComponent implements OnInit {

  purchases$: Observable<Purchase[]>;
  error$: Observable<any>;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    //use selector to listen data changes
    setTimeout(()=>{
      this.purchases$ = this.store.select(getPurchases);},3000
    );

    //listen errors when trying to fetch purchases from server
    this.error$ = this.store.select(getError);

    this.store.dispatch(PurchaseActions.loadPurchases());

  }

}
