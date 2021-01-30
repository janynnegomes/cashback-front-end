import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNavigation} from './state/app.selectors';
import { State } from 'src/app/state/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cashback';

  constructor(private store:Store<State>){}

  ngOnInit(){
    this.store.select(getNavigation).subscribe(route=>{
      console.log('route:',route)
    })
  }
}
