import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Category } from './category';
import { HeaderService } from './../common/header.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    private categoryURL = 'http://localhost:3000/categories?orderBy=name';

    constructor( 
        private http: Http,
        private headerService: HeaderService) {}

    getCategories(): Observable<Category[]> {
        
        var headers = this.headerService.getHeadersWithTokenForAPI();
        return this.http.get(this.categoryURL, {headers: headers})
            .map((response: Response) => response.json() as Category[]);
    }
}