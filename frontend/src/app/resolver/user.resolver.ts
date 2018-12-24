import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../service/user.service';
import {decimalDigest} from '@angular/compiler/src/i18n/digest';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Observable<any>> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.userService.getById(parseInt(id.trim(), 10));
    }
    return null;
  }

}
