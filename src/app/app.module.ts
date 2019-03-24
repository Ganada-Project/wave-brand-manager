import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";

import { AppComponent } from "./components/app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import {
  SmsComponent,
  ResendDialogComponent
} from "./components/auth/register/sms/sms.component";
import { CreateBrandComponent } from "./components/auth/register/create-brand/create-brand.component";
import { BrandDetailsComponent } from "./components/auth/register/brand-details/brand-details.component";
import { BrandDetailLoginComponent } from "./components/auth/register/brand-detail-login/brand-detail-login.component";
import { RoutingState } from "./routingState";
import { BrandDetailImageComponent } from "./components/auth/register/brand-detail-image/brand-detail-image.component";
import { ItemsComponent } from "./components/items/items.component";
import { ItemUploadComponent } from "./components/item-upload/item-upload.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SellComponent } from "./components/sell/sell.component";
import { ItemListComponent } from "./components/items/item-list/item-list.component";
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    SmsComponent,
    CreateBrandComponent,
    BrandDetailsComponent,
    BrandDetailLoginComponent,
    ResendDialogComponent,
    BrandDetailImageComponent,
    ItemsComponent,
    ItemUploadComponent,
    DashboardComponent,
    SellComponent,
    ItemListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [ResendDialogComponent],
  providers: [RoutingState],
  bootstrap: [AppComponent]
})
export class AppModule {}
