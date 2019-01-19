import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Hero} from '../api/hero';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {OnlineStatusService, OnlineStatusType} from './online-status.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private onlineStatusService: OnlineStatusService, private router: Router) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if (status === OnlineStatusType.ONLINE) {
        const offlineHeros = this.getOfflineHeros();
        while (offlineHeros.length > 0) {
          const offlineHero = offlineHeros.pop();
          const offlineHeroId = offlineHero.id;
          offlineHero.id = null;
          this.create(offlineHero).subscribe((response: any) => {
            console.log('saved successfully');
            if (this.router.url === '/hero-form/' + offlineHeroId) {
              this.router.navigate(['/hero-form', response.id]);
            }
          });
          this.setOfflineHeros(offlineHeros);
        }
      }
    });
  }

  getById(id: number) {
    if (id < 0) {
      return of(this.getOfflineHeros().find(offlineHero => offlineHero.id === id));
    }
    return this.http.get('/api/dto/heroes/' + id);
  }

  getAll() {
    return this.http.get('/api/heroes').pipe(
      map((response: any) => {
        return response._embedded.heroes;
      })
    );
  }

  delete(hero) {
    return this.http.delete('/api/heroes/' + hero.id);
  }

  update(hero: Hero) {
    return this.http.put('/api/dto/heroes/' + hero.id, hero);
  }

  create(hero: Hero) {
    return this.http.post('/api/dto/heroes', hero)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (!navigator.onLine) {
            hero.id = new Date().getUTCMilliseconds() * -1;
            const offlineHeros = this.getOfflineHeros();
            offlineHeros.push(hero);
            this.setOfflineHeros(offlineHeros);
          }
          return of(hero);
        })
      );
  }

  setOfflineHeros(offlinceHeros) {
    localStorage.setItem('offlineHeros', JSON.stringify(offlinceHeros));
  }

  getOfflineHeros(): Array<any> {
    return localStorage.getItem('offlineHeros') ? <Array<any>>JSON.parse(localStorage.getItem('offlineHeros')) : [];
  }

}