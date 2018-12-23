import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {ActorListComponent} from './actor-list/actor-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {MoviesResolver} from './resolver/movies.resolver';
import {ActorResolver} from './resolver/actor.resolver';

const routes: Routes = [
  {
    path: '', redirectTo: '/actor-list', pathMatch: 'full'
  },
  {
    path: 'actor-list', component: ActorListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'actor-form', component: ActorFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      movies: MoviesResolver,
    }
  },
  {
    path: 'actor-form/:id'
    , component: ActorFormComponent,
    canActivate: [AuthGuard], resolve: {
      actor: ActorResolver,
      movies: MoviesResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
