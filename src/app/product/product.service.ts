import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Product } from './product';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private productURL = 'http://localhost:3000/products?orderBy=name';

    constructor( private http: Http) {}

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productURL)
            .map((response: Response) => response.json() as Product[]);
    }
}