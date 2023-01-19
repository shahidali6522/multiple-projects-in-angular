import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaterComponent } from './calculater/calculater/calculater.component';
import { ProductsComponent } from './shop/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'calculater', component: CalculaterComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
