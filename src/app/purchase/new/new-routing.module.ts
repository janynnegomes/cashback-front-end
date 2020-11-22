import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPurchaseComponent } from './new.component';

const routes: Routes = [
  {
    path: '',
    component: NewPurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPurchaseRoutingModule { }
