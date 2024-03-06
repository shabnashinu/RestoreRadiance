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

  private phone = new BehaviorSubject<any>(null);
  phonedata$ = this.phone.asObservable();

  setFormData(formData: FormData): void {
    this.formdata.next(formData);
  }

  setphone(data: any): void {
    this.phone.next(data);
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

  verifyforgotpassword(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/verify`;
    const headers = new HttpHeaders({ 'contend-type': 'application/json' });

    return this.http.post<any>(endpoint, data, { headers });
  }

  //resetpassword
  resetpassword(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/newpassword`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, data, { headers });
  }

  //for company registration
  registrationform(formdata: any): Observable<any> {
    const endpoint = `${this.apiUrl}/companyroutes/registrationform`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, formdata);
  }


  //list the companies who registered
  getcompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/listcompany`);
  }




  //for the registration of the user who want to upload their house and budget
  userdata(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/userRoute/user-registration-data`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, data);
  }

  //list the users who registered for uploads
  listuser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/listuser`);
  }

  //admin sending email for companies
  approvecompany(data:any):Observable<any> {
    const endpoint = `${this.apiUrl}/admin/approvecompany`;
    return this.http.post<any>(endpoint,data);
  }



  //admin sending email for users
  acceptuser(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/admin/accept-user`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, data);
  }

  //check if the user is registered or not
  isUserRegistered(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/userRoute/upload`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpoint, { data });
  }
}
