import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  user: string = '';

  exist(value: any) {
    throw new Error('Method not implemented.');
  }
  loginUser(value: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'Http://localhost:3000';
  private formdata: BehaviorSubject<FormData | null> =
    new BehaviorSubject<FormData | null>(null);
  constructor(private http: HttpClient) {}
  setFormData(formData: FormData): void {
    this.formdata.next(formData);
  }
  getFormData(): BehaviorSubject<FormData | null> {
    return this.formdata;
  }

  createUser(userData: any): Observable<any> {
    const endpoint = `${this.apiUrl}/signup`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, userData, { headers });
  }
  verifyotp(data: any): Observable<any> {
    console.log('anythinggggg');

    const endpoint = `${this.apiUrl}/verifyotp`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, data, { headers });
  }

  forgotpassword(phone: any): Observable<any> {
    const endpoint = `${this.apiUrl}/forgotpassword`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, phone, { headers });
  }
}
