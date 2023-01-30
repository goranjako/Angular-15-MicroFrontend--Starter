import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_ROUTES } from '@auth-lib';

import { NotFoundComponent } from './index/not-found/not-found.component';

const routes: Routes = [
 {
  path: '',
  loadChildren: () => import('products/Module').then(m => m.ProductModule)
},
{
  path: 'admin',
  loadChildren: () => import('admin/Module').then(m => m.AdminModule)
},
...AUTH_ROUTES,
{path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
