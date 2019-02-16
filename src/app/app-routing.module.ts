import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './components/auth/index';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { MainComponent } from './components/main/main.component';
import { SmsComponent } from './components/auth/register/sms/sms.component';
import { CreateBrandComponent } from './components/auth/register/create-brand/create-brand.component';
import { BrandDetailsComponent } from './components/auth/register/brand-details/brand-details.component';

const routes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'register', component: RegisterComponent, children: [
    { path: 'sms', component: SmsComponent },
    { path: 'createBrand', component: CreateBrandComponent },
    { path: 'brandDetails', component: BrandDetailsComponent }
  ] },
  { path: '', component: HomeComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
