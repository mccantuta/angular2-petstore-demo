import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { LocalStorageService } from './../common/local-storage.service';

@Injectable()
export class AuthenticationService {

    private _userLogged = new Subject<boolean>();
    public authenticated = this._userLogged.asObservable();

    private authenticateURL = 'http://localhost:3000/authenticate';
    
    constructor(
        private http: Http,
        private localStorageService: LocalStorageService ) {
    }

    login(user: string, password: string) {
        let headers = new Headers();
        
        headers.append('Content-Type', 'application/json');

        return this.http.post(
            this.authenticateURL, 
            JSON.stringify({user: user, password: password}),
            {headers})
            .map( (response: Response) => {
                var auhenticationResponse = response.json();
                if (auhenticationResponse && auhenticationResponse.token) {
                    this.localStorageService.add('currentUser', JSON.stringify(auhenticationResponse));
                    this.userLogged(true);
                }
            });
    }

    logout() {
        this.localStorageService.remove('currentUser');
        this.userLogged(false);
    }

    userLogged(logged: boolean) {
         this._userLogged.next(logged);
     }
}