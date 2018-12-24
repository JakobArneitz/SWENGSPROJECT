import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {decimalDigest} from '@angular/compiler/src/i18n/digest';

@Injectable({
  providedIn: 'root'
})
export class HireResolver implements Resolve<Observable<any>> {

  constructor(private hireService: HireService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.hireService.getById(parseInt(id.trim(), 10));
    }
    return null;
  }
}
