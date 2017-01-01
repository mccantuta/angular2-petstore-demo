import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './common/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './common/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const appRoutes: Routes = [
    { path: 'categories', component: CategoryComponent, canActivate: [AuthenticationGuard]},
    { path: 'products', component: ProductComponent, canActivate: [AuthenticationGuard]},
    { path: 'order', redirectTo: '/order', canActivate: [AuthenticationGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}