import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RatingModule} from 'ngx-bootstrap/rating';
import {NgxSelectModule} from 'ngx-select-ex';
import {BsDatepickerModule} from 'ngx-bootstrap';

import {defineLocale} from 'ngx-bootstrap/chronos';
import {deLocale} from 'ngx-bootstrap/locale';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorInterceptor} from './httpinterceptor/error.interceptor';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroesFightingListComponent } from './heroes-fighting-list/heroes-fighting-list.component';
import { UserRequestComponent } from './user-request/user-request.component';

defineLocale('de', deLocale);


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    UserFormComponent,
    UsersListComponent,
    HeroesListComponent,
    HeroFormComponent,
    HeroesFightingListComponent,
    UserRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    RatingModule.forRoot(),
    NgxSelectModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
