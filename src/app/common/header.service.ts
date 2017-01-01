import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class HeaderService {
    
    getHeadersWithTokenForAPI(): Headers {
        let headers = new Headers();
        
        let currentUser = localStorage.getItem('currentUser');
        let json = JSON.parse(currentUser);
        headers.append('x-access-token', json.token);
        
        return headers;
    }
}