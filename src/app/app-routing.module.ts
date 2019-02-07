import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './components/auth/index';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
