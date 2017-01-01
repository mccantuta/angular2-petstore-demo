import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './common/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './common/home.component';
import { AuthenticationService } from './login/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LocalStorageService } from './common/local-storage.service';
import { HeaderService } from './common/header.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    CategoryComponent,
    ProductComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [
    LocalStorageService,
    AuthenticationService,
    AuthenticationGuard,
    HeaderService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
