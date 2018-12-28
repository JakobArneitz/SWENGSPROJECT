import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Hero} from '../api/hero';
import {Movie} from '../api/movie';
import {HeroService} from '../service/hero.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../service/movie.service';
import { AvatarModule } from 'ngx-avatar';
import { IsadminService } from '../isadmin.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  heroes: Array<Hero>;
  hero;
  movies: Array<Movie>;
  moviesForHero =[];
  index;

  constructor(public auth: IsadminService, private http: HttpClient, private heroService: HeroService, private router: Router, private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.movieService.getAll()
      .subscribe((movies: any) => {
        this.movies = movies;
      });

    this.heroService.getAll()
      .subscribe((heroes: any) => {
        this.heroes = heroes;
      });
  }

  getMoviesForHero(id: number){
    this.moviesForHero =[];
    for (var j=0; j<this.heroes.length;j++){
      if(this.heroes[j].id == id){
        this.heroService.getById(this.heroes[j].id)
          .subscribe((hero: any) => {
            this.hero = hero;
            this.index = this.hero.movies;
            for(var i = 0; i < this.index.length;i++){
              console.log(this.movies[0]);
              this.moviesForHero[i] = this.movies[i].title;
            }
          });
      }
    }
  }

  deleteHero(hero: Hero) {

    this.heroService.delete(hero)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createHero() {
    this.router.navigate(['/hero-form']);
  }

  back() {
    if(this.auth.isAdmin === false){
      this.router.navigate(['/user-dashboard']);
    }else this.router.navigate(['/admin-dashboard']);
  }
}
