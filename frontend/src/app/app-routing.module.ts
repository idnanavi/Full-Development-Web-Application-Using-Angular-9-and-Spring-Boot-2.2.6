import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  {path :'login',component:LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path:'cart', component:CartComponent},
  { path:'about', component:AboutComponent},
  { path:'contact-us', component:ContactusComponent},
  {path:'create-product',component:CreateProductComponent},
  {path:'edit-product',component:EditProductComponent},
  {path:'manage-products',component:ManageProductsComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }