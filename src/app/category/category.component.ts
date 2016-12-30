import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
    selector: 'category-component',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css'],
    providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

    categories: Category[];
    errorMessage: string;

    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.getCategories();
    }

    getCategories() {
        this.categoryService.getCategories()
            .subscribe(
                categories => this.categories = categories,
                error => this.errorMessage = error);
    }
}