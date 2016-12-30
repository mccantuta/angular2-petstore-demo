import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './common/page-not-found.component';

const appRoutes: Routes = [
    { path: 'categories', component: CategoryComponent},
    { path: 'products', component: ProductComponent},
    { path: 'order', redirectTo: '/order'},
    { path: '', redirectTo: '/order', pathMatch: 'full'},
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
export class AppRoutingModule {

}