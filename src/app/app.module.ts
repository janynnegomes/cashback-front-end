import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PurchaseService } from './services/purchases.service';
import { appReducer } from './state/app.reducer';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({},{}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name:'Cashback App', maxAge: 25, logOnly: environment.production })
    
  ],
  providers: [
    PurchaseService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
