import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then(m => m.NewModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
