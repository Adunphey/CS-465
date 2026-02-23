import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';
import { TripAddComponent } from './trip-add/trip-add';
import { TripEditComponent } from './trip-edit/trip-edit';

export const routes: Routes = [
  { path: '', component: TripListingComponent },
  { path: 'add', component: TripAddComponent },
  { path: 'edit/:id', component: TripEditComponent }
];