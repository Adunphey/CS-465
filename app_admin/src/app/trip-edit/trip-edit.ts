import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { TripDataService, ApiTrip } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './trip-edit.html'
})
export class TripEditComponent implements OnInit {
  trip!: ApiTrip;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.tripDataService.getTrips().subscribe(trips => {
      const found = trips.find(t => t._id === id);
      if (found) this.trip = { ...found };
    });
  }

  save(): void {
    if (!this.trip._id) return;

    this.tripDataService.updateTrip(this.trip._id, {
      name: this.trip.name,
      img: this.trip.img,
      description: this.trip.description
    }).subscribe(() => this.router.navigate(['/']));
  }
}