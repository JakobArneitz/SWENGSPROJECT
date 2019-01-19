import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Hire} from '../api/hire';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {OnlineStatusService, OnlineStatusType} from './online-status.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  constructor(private http: HttpClient, private onlineStatusService: OnlineStatusService, private router: Router) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if (status === OnlineStatusType.ONLINE) {
        const offlineHires = this.getOfflineHires();
        while (offlineHires.length > 0) {
          const offlineHire = offlineHires.pop();
          const offlineHireId = offlineHire.id;
          offlineHire.id = null;
          this.create(offlineHire).subscribe((response: any) => {
            console.log('saved successfully');
            if (this.router.url === '/user-request/' + offlineHireId) {
              this.router.navigate(['/user-request', response.id]);
            }
          });
          this.setOfflineHires(offlineHires);
        }
      }
    });
  }

  getById(id: number) {
    if (id < 0) {
      return of(this.getOfflineHires().find(offlineHire => offlineHire.id === id));
    }
    return this.http.get('/api/dto/hires/' + id).pipe(map((res: any) => {
      if (res.dayOfBirth) {
        res.dayOfBirth = new Date(res.dayOfBirth);
      }
      return res;
    }));
  }

  getAll() {
    return this.http.get('/api/hires').pipe(
      map((response: any) => {
        return response._embedded.hires;
      })
    );
  }

  delete(hire) {
    return this.http.delete('/api/hires/' + hire.id);
  }

  update(hire: Hire) {
    return this.http.put('/api/dto/hires/' + hire.id, hire);
  }

  create(hire: Hire) {
    return this.http.post('/api/dto/hires', hire)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (!navigator.onLine) {
            hire.id = new Date().getUTCMilliseconds() * -1;
            const offlineHires = this.getOfflineHires();
            offlineHires.push(hire);
            this.setOfflineHires(offlineHires);
          }
          return of(hire);
        })
      );
  }

  setOfflineHires(offlinceHires) {
    localStorage.setItem('offlineHires', JSON.stringify(offlinceHires));
  }

  getOfflineHires(): Array<any> {
    return localStorage.getItem('offlineHires') ? <Array<any>>JSON.parse(localStorage.getItem('offlineHires')) : [];
  }

}
