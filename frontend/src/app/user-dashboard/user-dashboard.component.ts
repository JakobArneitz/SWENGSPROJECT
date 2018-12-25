import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  userRequest() {
    this.router.navigate(['/user-request']);
  }

  viewHeroes() {
    this.router.navigate(['/heroes-list']);
  }

  heroesFighting() {
    this.router.navigate(['/heroes-fighting-list']);
  }
}
