import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent, RegisterComponent } from "./components/auth/index";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { MainComponent } from "./components/main/main.component";
import { SmsComponent } from "./components/auth/register/sms/sms.component";
import { CreateBrandComponent } from "./components/auth/register/create-brand/create-brand.component";
import { BrandDetailsComponent } from "./components/auth/register/brand-details/brand-details.component";
import { BrandDetailLoginComponent } from "./components/auth/register/brand-detail-login/brand-detail-login.component";
import { BrandDetailImageComponent } from "./components/auth/register/brand-detail-image/brand-detail-image.component";
import { RedirectGuard } from "./guards/redirect.guard";
import { ItemsComponent } from "./components/main/items/items.component";
import { ItemUploadComponent } from "./components/main/item-upload/item-upload.component";
import { DashboardComponent } from "./components/main/dashboard/dashboard.component";
import { SellComponent } from "./components/main/sell/sell.component";

const routes: Routes = [
  { path: "signIn", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
    children: [
      { path: "sms", component: SmsComponent },
      { path: "createBrand", component: CreateBrandComponent },
      { path: "brandDetails", component: BrandDetailsComponent },
      { path: "brandLogin", component: BrandDetailLoginComponent },
      { path: "brandImage", component: BrandDetailImageComponent }
    ]
  },
  { path: "", component: HomeComponent },
  {
    path: "main",
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "sell", component: SellComponent },
      { path: "items", component: ItemsComponent },
      { path: "item-upload", component: ItemUploadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
