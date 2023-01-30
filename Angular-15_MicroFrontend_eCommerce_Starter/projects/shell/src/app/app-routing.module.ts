import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'projects/auth-lib/src/lib/auth/login/login.component';
import { RegisterComponent } from 'projects/auth-lib/src/lib/auth/register/register.component';
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
{path:"login", component:LoginComponent},
{path:"sign-up", component:RegisterComponent},
{path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
