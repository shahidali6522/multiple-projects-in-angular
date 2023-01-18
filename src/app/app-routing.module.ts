import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaterComponent } from './calculater/calculater/calculater.component';

const routes: Routes = [{ path: 'calculater', component: CalculaterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
