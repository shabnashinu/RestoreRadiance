import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent {
  phone: string = ''; // Initialize phone variable

  constructor(
    private apicall: ApiService,
    private route: Router
  ) {}

  onSubmit(): void {
    console.log(this.phone);

    if (this.phone) {
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
