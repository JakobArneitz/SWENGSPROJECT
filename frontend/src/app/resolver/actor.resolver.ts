import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ActorService} from '../service/actor.service';
import {decimalDigest} from '@angular/compiler/src/i18n/digest';

@Injectable({
  providedIn: 'root'
})
export class ActorResolver implements Resolve<Observable<any>> {

  constructor(private actorService: ActorService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.actorService.getById(parseInt(id.trim(), 10));
    }
    return null;
  }

}
