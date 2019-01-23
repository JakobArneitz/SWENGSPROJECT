import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Hero} from '../api/hero';
import {Hire} from '../api/hire';
import {HeroService} from '../service/hero.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HireService} from '../service/hire.service';
import { AvatarModule } from 'ngx-avatar';
import { IsadminService } from '../isadmin.service';

@Component({
  selector: 'app-heroes-fighting-list',
  templateUrl: './heroes-fighting-list.component.html',
  styleUrls: ['./heroes-fighting-list.component.scss']
})
export class HeroesFightingListComponent implements OnInit {

  hires: Array<Hire>;
  hire;
  heros: Array<Hero>;
  moviesForHero =[];
  index;
  
  displayedColumns = ['id','enemyName', 'enemyPower', 'superhero', 'hireFrom','hireTo'];
  dataSource: MatTableDataSource<Hire>;

  constructor(public auth: IsadminService, private http: HttpClient, private heroService: HeroService, private router: Router, private hireService: HireService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hireService.getAll()
        .subscribe((hires: any) => {		  
            this.hires = hires;
			this.dataSource = new MatTableDataSource(this.hires);
        });
		
    this.heroService.getAll()
        .subscribe((heros: any) => {
            this.heros = heros;
        });
		
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  deleteHire(hire: Hire) {

    this.hireService.delete(hire)
      .subscribe(() => {
        this.ngOnInit();
      });

  }
  	
  createHire() {
    this.router.navigate(['/user-request']);
  }
    
    back() {
        if(this.auth.isAdmin === false){
            this.router.navigate(['/user-dashboard']);
        }else this.router.navigate(['/admin-dashboard']);
    }
}
