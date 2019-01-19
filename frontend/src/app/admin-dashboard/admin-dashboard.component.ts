import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IsadminService } from '../isadmin.service';

@Component({
selector: 'app-admin-dashboard',
templateUrl: './admin-dashboard.component.html',
styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    constructor(public auth: IsadminService,private router: Router) { 
        if(this.auth.isAdmin === false){
            this.router.navigate(['/user-dashboard']);
        }
    }

    ngOnInit() {
    }
    
    viewUsers(){
        this.router.navigate(['/users-list']);
    }
    
    createUser() {
        this.router.navigate(['/user-form']);
    }
    
    viewHeroes(){
        this.router.navigate(['/heroes-list']);
    }
    
    createHeroes(){
        this.router.navigate(['/hero-form']);
    }
    
    heroesFighting(){
        this.router.navigate(['/heroes-fighting-list']);
    }
}