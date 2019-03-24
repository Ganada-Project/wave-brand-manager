import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent, RegisterComponent } from "./components/auth/index";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guards/auth.guard";
import { SmsComponent } from "./components/auth/register/sms/sms.component";
import { CreateBrandComponent } from "./components/auth/register/create-brand/create-brand.component";
import { BrandDetailsComponent } from "./components/auth/register/brand-details/brand-details.component";
import { BrandDetailLoginComponent } from "./components/auth/register/brand-detail-login/brand-detail-login.component";
import { BrandDetailImageComponent } from "./components/auth/register/brand-detail-image/brand-detail-image.component";
import { RedirectGuard } from "./guards/redirect.guard";
import { ItemsComponent } from "./components/items/items.component";
import { ItemListComponent } from "./components/items/item-list/item-list.component";
import { ItemUploadComponent } from "./components/item-upload/item-upload.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SellComponent } from "./components/sell/sell.component";

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
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sell",
    component: SellComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "items",
    component: ItemsComponent,
    children: [
      { path: "", component: ItemListComponent },
      { path: "upload", component: ItemUploadComponent }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
