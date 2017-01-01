import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {
    
    add(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    get(key: string): string {
        return localStorage.getItem(key);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}