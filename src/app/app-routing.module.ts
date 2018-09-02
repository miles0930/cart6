import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { addformComponent } from './addform/addform.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: addformComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
