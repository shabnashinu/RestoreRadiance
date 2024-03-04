import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent {
  phone: string = ''; // Initialize phone variable

  constructor(
    private apicall: ApiService,
    private route: Router,
    private authService: AuthServiceService
  ) {}

  onSubmit(): void {
    console.log(this.phone);
    this.apicall.setphone(this.phone)
    if (this.phone) {
      this.authService.mobileNumberShareSubject$.next(Number(this.phone));
      this.apicall.forgotpassword({ phone: this.phone }).subscribe(
        (response) => {
          if (response.otpsend) {
            this.route.navigate(['/otp']);
          }
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }
}
