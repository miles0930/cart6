import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductformComponent } from './productform/productform.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: ProductformComponent },
  { path: 'edit/:index', component: ProductformComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
