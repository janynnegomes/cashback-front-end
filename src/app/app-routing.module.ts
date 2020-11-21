import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseModule } from './purchase/purchase.module';

const routes: Routes = [
  {
    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule),
  },
  {
    path: "**",
    loadChildren: () => import('./empty/empty.module').then(m => m.EmptyModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),PurchaseModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
