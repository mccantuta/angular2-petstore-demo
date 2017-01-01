import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Product } from './product';
import { HeaderService } from './../common/header.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private productURL = 'http://localhost:3000/products?orderBy=name';

    constructor(
        private http: Http,
        private headerService: HeaderService) {}

    getProducts(): Observable<Product[]> {

        var headers = this.headerService.getHeadersWithTokenForAPI();

        return this.http.get(this.productURL, { headers: headers })
            .map((response: Response) => response.json() as Product[]);
    }
}