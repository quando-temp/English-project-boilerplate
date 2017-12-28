import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/module/shared.module';
import { HomeComponent } from './home.component';

const _routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(_routes)
  ],
  declarations: [HomeComponent]
})

export class HomeModule { }
