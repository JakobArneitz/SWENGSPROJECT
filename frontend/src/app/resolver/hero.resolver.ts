import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {decimalDigest} from '@angular/compiler/src/i18n/digest';
/*
@Injectable({
  providedIn: 'root'
})
export class HeroResolver implements Resolve<Observable<any>> {

  constructor(private heroService: HeroService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.heroService.getById(parseInt(id.trim(), 10));
    }
    return null;
  }
}
*/
