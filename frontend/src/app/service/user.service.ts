import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;
  loggedInChange: Subject<boolean> = new Subject<boolean>();
  jwtHelperService: JwtHelperService;

  accessTokenLocalStorageKey = 'access_token';

  constructor(private http: HttpClient, private router: Router) {
    this.jwtHelperService = new JwtHelperService();
    const token = localStorage.getItem(this.accessTokenLocalStorageKey);
    if (token) {
      console.log('Token expiration date: '
        + this.jwtHelperService.getTokenExpirationDate(token));
      this.isLoggedIn = !this.jwtHelperService.isTokenExpired(token);
    }
    this.loggedInChange.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  login(user) {
    return this.http.post('/api/auth/', user, {
      'headers': new HttpHeaders({'Content-Type': 'application/json'}),
      'responseType': 'text',
      observe: 'response'
    }).pipe(map((res: any) => {
      const token = res.headers.get('Authorization').replace(/^Bearer /, '');
      localStorage.setItem(this.accessTokenLocalStorageKey, token);
      console.log(this.jwtHelperService.decodeToken(token));
      this.loggedInChange.next(true);
      if(this.jwtHelperService.decodeToken(token).authorities[0] == 'ROLE_ADMIN')
        this.router.navigate(['/admin-dashboard']);
      else this.router.navigate(['/user-dashboard']);
      return res;
    }));
  }

  logout() {
    localStorage.removeItem(this.accessTokenLocalStorageKey);
    this.loggedInChange.next(false);
    this.router.navigate(['/login']);
  }
  
  getById(id: number) {
    return this.http.get('/api/dto/users/' + id);
  }

  getAll() {
    return this.http.get('/api/users/');
  }

  delete(user) {
    return this.http.delete('/api/users/' + user.id);
  }

  update(user: User) {
    return this.http.put('/api/dto/users/' + user.id, user);
  }

  create(user: User) {
    return this.http.post('/api/dto/users', user);
  }
}
