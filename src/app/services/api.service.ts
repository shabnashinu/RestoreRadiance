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


  //get company email
  private emailSubject = new BehaviorSubject<any>(null);
  userEmail$ = this.emailSubject.asObservable();

  setEmail(email: any): void {
    console.log('hio');
    
    this.emailSubject.next(email);
  }


//get user email
  private emailuserSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setuserEmail(email: string): void {
    this.emailuserSubject.next(email);
  }

  getuserEmail(): Observable<string> {
    return this.emailuserSubject.asObservable();
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
  approvecompany(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/admin/approvecompany`;
    return this.http.post<any>(endpoint, data);
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

    return this.http.post<any>(endpoint, data);
  }

  //to show the useruploads
  getuseruploads(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/userRoute/getuseruploads`);
  }

  //to update user uploads
  updateuser(data: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/userRoute/updateuserupload`,
      data
    );
  }

  //to delete the user uploads
  deleteUploads(data: any): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/userRoute/deleteuserupload/${data}`
    );
  }

  //to check if the company is registered or not
  iscompanyregistered(data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/companyroutes/companyupload`;
    const headers = new HttpHeaders({ 'content-type': 'application/json' });

    return this.http.post<any>(endpoint, data);
  }

  //to show company uploads
  getcompanyuploads(): Observable<any> {
    return this.http.get<any[]>(
      `${this.apiUrl}/companyroutes/getcompanyuploads`
    );
  }

  //to update company uploads
  updatecompany(data: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/companyroutes/updatecompanyupload`,
      data
    );
  }

  deletecompanyUploads(data: any): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/companyroutes/deletcompany/${data}`
    );
  }

  companyemail(data: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/companyroutes/companyemail/${data}`
    );
  }

  useremail(data: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/userRoute/useremail/${data}`
    );
  }
}
