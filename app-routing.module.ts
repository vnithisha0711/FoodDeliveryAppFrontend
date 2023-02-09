import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResatuarantpageComponent } from './pages/resatuarantpage/resatuarantpage.component';
import { AboutUsComponent } from './_Components/about-us/about-us.component';
import { AdminComponent } from './_Components/admin/admin.component';
import { ContactUsComponent } from './_Components/contact-us/contact-us.component';
import { CustomerpageComponent } from './_Components/customerpage/customerpage.component';
import { LoginComponent } from './_Components/login/login.component';
import { SignUpComponent } from './_Components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'admin', component:AdminComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'restaurantpage',component:ResatuarantpageComponent},
  {path:'customerpage',component:CustomerpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
