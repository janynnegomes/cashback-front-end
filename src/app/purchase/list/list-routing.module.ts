import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPurchasesComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    component: ListPurchasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPurchasesRoutingModule { }
