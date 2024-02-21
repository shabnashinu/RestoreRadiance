import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { json } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private apiUrl = 'Http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserType() {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.userType || '';
      } catch (error) {
        console.error('Error decoding token:', error);
        return '';
      }
    }
    return '';
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
  isAthenticated() {
    return !!localStorage.getItem('token');
  }

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post<any>(loginUrl, credentials);
  }
}