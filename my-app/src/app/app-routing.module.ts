import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from "./products/product-details/product-details.component";

const routes: Routes = [
  {path: 'products', loadChildren: () =>
    import('./products/products.module')
      .then(f => f.ProductsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
