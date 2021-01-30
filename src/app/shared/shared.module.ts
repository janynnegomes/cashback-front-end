import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [UserCardComponent, NavigationComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[UserCardComponent,NavigationComponent]
})
export class SharedModule { }
