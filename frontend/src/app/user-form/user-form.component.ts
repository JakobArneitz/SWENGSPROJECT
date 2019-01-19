import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {User} from '../api/user';
import { IsadminService } from '../isadmin.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    userForm;
    admin;
    constructor(public auth: IsadminService,private userService: UserService, private route: ActivatedRoute, private router: Router) {
        if(this.auth.isAdmin === false){
            this.router.navigate(['/user-dashboard']);
        }
    }

    ngOnInit() {
        this.userForm = new FormGroup({
            'id': new FormControl(),
            'username': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required]),
            'admin': new FormControl('', [Validators.required]),                  
        });
        
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.userService.getById(parseInt(id.trim(), 10))
            .subscribe((response) => {
                const data = this.route.snapshot.data;
                const user = data.user;
                user.id = id;
                if (user) {
                    this.userForm.setValue(user);
                }
            });
        }
    }
  
    register(){
        const user = this.userForm.value;
        user.admin = this.admin;
        if (user.id) {
            this.userService.update(user)
                .subscribe((response) => {
                    alert('User updated successfully');
                    this.router.navigate(['/admin-dashboard'])
                });
        } else {
            this.userService.create(user)
                .subscribe((response: any) => {
                    alert('User created successfully');
                    this.router.navigate(['/admin-dashboard'])
                });
        }
    }
  
    back() {
        this.router.navigate(['/admin-dashboard']);
    }

}