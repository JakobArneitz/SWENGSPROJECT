import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from '../api/hero';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroService} from '../service/hero.service';
import {MovieService} from '../service/movie.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { IsadminService } from '../isadmin.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  heroForm;
  shouldNavigateToList: boolean;
  movieOptions;

  constructor(public auth: IsadminService,private heroService: HeroService, private route: ActivatedRoute, private router: Router,
              private movieService: MovieService) {
    if(this.auth.isAdmin === false){
      this.router.navigate(['/user-dashboard']);
    }

  }

  ngOnInit() {

    this.heroForm = new FormGroup({
      'id': new FormControl(),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(),
      'superheroName': new FormControl(),
      'rating': new FormControl(),
      'movies': new FormControl(),
      'gender': new FormControl(),
      'alive': new FormControl(),
      'superPower': new FormControl(),
      'avatar': new FormControl()
    });

    this.heroForm.controls.rating.valueChanges
      .subscribe((newValue) => {
        if (newValue > 5) {
          this.heroForm.controls.alive.setValue(true);
        }
      });

    this.movieService.getAll()
      .subscribe((movies: any) => {
        this.movieOptions = movies;
      });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.getById(parseInt(id, 10))
        .subscribe((response) => {
          const data = this.route.snapshot.data;
          const hero = data.hero;
          if (hero) {
            this.heroForm.setValue(hero);
          }
        });
    }
  }

  saveHero() {

    const hero = this.heroForm.value;
    if (hero.id) {
      this.heroService.update(hero)
        .subscribe((response) => {
          alert('Hero updated successfully');
          this.heroForm.setValue(response);
          this.router.navigate(['/heroes-list']);
        });
    } else {
      this.heroService.create(hero)
        .subscribe((response: any) => {
          alert('Hero created successfully');
          this.router.navigate(['/heroes-list']);
        });
    }

  }

  back() {
    this.router.navigate(['/admin-dashboard']);
  }
}
