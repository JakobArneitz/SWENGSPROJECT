import { Injectable } from '@angular/core';
import {UserService} from './service/user.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsadminService {

  isAdmin;
  jwtHelperService: JwtHelperService;
  accessTokenLocalStorageKey = 'access_token';

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
    this.jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem(this.accessTokenLocalStorageKey);
    if (token) {
      if(this.jwtHelperService.decodeToken(token).authorities[0] == 'ROLE_ADMIN')
        this.isAdmin=true;
      else
        this.isAdmin=false;
    }
  }
}
