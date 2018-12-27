import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../api/user';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { IsadminService } from '../isadmin.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Array<User>;

  constructor(public auth: IsadminService, private http: HttpClient, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    if (this.auth.isAdmin === false) {
      this.router.navigate(['/user-dashboard']);
    }
  }

  ngOnInit() {
    this.userService.getAll()
      .subscribe((users: any) => {
        this.users = users._embedded.users;
        console.log(this.users);
      });
  }

  deleteUser(user: User) {
    this.userService.delete(user)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  back() {
    this.router.navigate(['/admin-dashboard']);
  }

}
