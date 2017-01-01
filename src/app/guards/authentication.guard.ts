import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LocalStorageService } from './../common/local-storage.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private localStorageService: LocalStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.localStorageService.get('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }})
        return false;
    }
}