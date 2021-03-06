import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-component',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css'],
    providers: [ProductService]
})
export class ProductComponent implements OnInit {

    products: Product[];
    
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => console.error(error));
    }
}