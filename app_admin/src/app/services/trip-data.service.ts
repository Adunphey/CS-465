import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ApiTrip {
  _id?: string;
  name: string;
  img: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiUrl = '/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<ApiTrip[]> {
    return this.http.get<ApiTrip[]>(this.apiUrl);
  }

  addTrip(payload: { name: string; img: string; description: string }): Observable<ApiTrip> {
    return this.http.post<ApiTrip>(this.apiUrl, payload);
  }

  updateTrip(id: string, payload: { name: string; img: string; description: string }): Observable<ApiTrip> {
    return this.http.put<ApiTrip>(`${this.apiUrl}/${id}`, payload);
  }

  deleteTrip(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}