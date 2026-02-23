import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiTrip, TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent {
  @Input() trip!: ApiTrip;

  constructor(private tripDataService: TripDataService) {}

  onImgError(event: Event): void {
    const imgEl = event.target as HTMLImageElement | null;
    if (imgEl) imgEl.style.display = 'none';
  }

  delete(): void {
    if (!this.trip._id) return;

    if (confirm('Delete this trip?')) {
      this.tripDataService.deleteTrip(this.trip._id).subscribe({
        next: () => window.location.reload(),
        error: (err) => console.error('Delete failed', err)
      });
    }
  }
}