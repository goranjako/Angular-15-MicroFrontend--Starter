import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
