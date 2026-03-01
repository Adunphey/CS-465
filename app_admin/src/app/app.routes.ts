import { Routes } from '@angular/router';

import { TripListingComponent } from './trip-listing/trip-listing';
import { TripAddComponent } from './trip-add/trip-add';
import { TripEditComponent } from './trip-edit/trip-edit';

import { LoginComponent } from './login/login';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: TripListingComponent, canActivate: [authGuard] },
  { path: 'add', component: TripAddComponent, canActivate: [authGuard] },
  { path: 'edit/:id', component: TripEditComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];