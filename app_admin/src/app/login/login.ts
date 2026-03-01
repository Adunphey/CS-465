import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = 'admin';
  password = 'password123';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit(): void {
  alert('submit fired');     
  console.log('submit fired');
  this.error = '';

    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => (this.error = 'Invalid login. Try again.')
    });
  }
}