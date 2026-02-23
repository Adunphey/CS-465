import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './trip-add.html',
  styleUrl: './trip-add.css'
})
export class TripAddComponent {
  name = '';
  img = '';
  description = '';

  isSaving = false;
  errorMsg = '';

  constructor(private tripDataService: TripDataService, private router: Router) {}

  addTrip(): void {
    this.errorMsg = '';

    if (!this.name.trim() || !this.description.trim()) {
      this.errorMsg = 'Name and Description are required.';
      return;
    }

    this.isSaving = true;

    this.tripDataService.addTrip({
      name: this.name.trim(),
      img: this.img.trim(),
      description: this.description.trim()
    }).subscribe({
      next: () => {
        this.isSaving = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error adding trip', err);
        this.isSaving = false;
        this.errorMsg = 'Failed to add trip. Check console for details.';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}