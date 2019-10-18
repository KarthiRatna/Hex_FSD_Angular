import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, AboutComponent, DetailComponent,AddProductComponent,RegisterComponent, LoginComponent, NotFoundComponent } from './components';
import { ProductResolver } from './resolver';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmGuard } from './guards/confirm.guard';


const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'detail/:id', component:DetailComponent,
  resolve:{
    item:ProductResolver
  }
},
  {path:'product/add',component:AddProductComponent,canActivate:[AuthGuard],canDeactivate:[ConfirmGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
