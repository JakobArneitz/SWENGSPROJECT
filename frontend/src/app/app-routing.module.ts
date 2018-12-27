import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {MoviesResolver} from './resolver/movies.resolver';
import {UserResolver} from './resolver/user.resolver';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroesFightingListComponent } from './heroes-fighting-list/heroes-fighting-list.component';
import { UserRequestComponent } from './user-request/user-request.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/heroes-list', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'hero-form', component: HeroFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      movies: MoviesResolver,
    }
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-form/:id'
    , component: UserFormComponent,
    canActivate: [AuthGuard], resolve: {
      user: UserResolver
    }
  },
  {
    path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'heroes-list', component: HeroesListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'heroes-fighting-list', component: HeroesFightingListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-request', component: UserRequestComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
