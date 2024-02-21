import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json, response } from 'express';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface UserData {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  response!: any;
  formvalue!: any;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstname: ['shabna', Validators.required],
      lastname: ['shinu', Validators.required],
      phone: ['9562027986', Validators.required],
      email: ['shabna@gmail.com', [Validators.required, Validators.email]],
      password: ['Model@123', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        'Model@123',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log('Form submitted:', this.signupForm.value);
      this.formvalue = this.signupForm.value;

      this.api.createUser(this.formvalue).subscribe(
        (response) => {
          console.log('signup otp component');

          console.log('successful', response);
          this.response = response;

          if (response.otpsend) {
            this.router.navigate(['/otp'], {
              queryParams: {
                option: 'user-verify',
              },
            });
            this.api.setFormData(this.formvalue);
          }
        },
        (error) => {
          console.log('not valid', error);
        }
      );
    }
  }
}
