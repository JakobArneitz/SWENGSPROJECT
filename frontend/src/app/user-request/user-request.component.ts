import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hire} from '../api/hire';
import {ActivatedRoute, Router} from '@angular/router';
import {HireService} from '../service/hire.service';
import {HeroService} from '../service/hero.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.scss']
})
export class UserRequestComponent implements OnInit {

  hireForm;
  heroOptions;

  constructor(private hireService: HireService, private route: ActivatedRoute, private router: Router,
              private heroService: HeroService) {
  }

  ngOnInit() {

    this.hireForm = new FormGroup({
      'id': new FormControl(),
      'enemyName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'enemyPower': new FormControl(),
      'superhero': new FormControl(),
      'hireFrom': new FormControl(),
      'hireTo': new FormControl(),
    });
    
    this.heroService.getAll()
      .subscribe((heros: any) => {
        this.heroOptions = heros;
      });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hireService.getById(parseInt(id, 10))
        .subscribe((response) => {
          const data = this.route.snapshot.data;
          const hire = data.hire;
          hire.id=id;
          if (hire) {
            this.hireForm.setValue(hire);
          }
        });
    }
  }

  saveHire() {

    const hire = this.hireForm.value;
    console.log(hire);
    for (let hero of this.heroOptions) {
        if(hero.id == hire.superhero)
            hire.superhero = hero.superheroName;
    }
    if (hire.id) {
      this.hireService.update(hire)
        .subscribe((response) => {
          alert('Hire updated successfully');
          this.hireForm.setValue(response);
          this.router.navigate(['/heroes-fighting-list']);
        });
    } else {
      this.hireService.create(hire)
        .subscribe((response: any) => {
          alert('Hire created successfully');
          this.router.navigate(['/heroes-fighting-list']);
        });
    }

  }
  
  back() {
        this.router.navigate(['/user-dashboard']);
    }
}