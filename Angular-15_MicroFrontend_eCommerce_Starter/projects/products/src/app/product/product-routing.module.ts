import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [{ path: '', component: ProductComponent,
children:[
  {path:"products",component:ProductComponent},
  {path:"product-detail",component:ProductListComponent},

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
