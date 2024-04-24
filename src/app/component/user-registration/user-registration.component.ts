import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  registrationForm!: FormGroup
  userService: any;
  
  constructor(private formBuilder: FormBuilder , private registrationapi:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    try {
      if (this.registrationForm.valid) {
        console.log('Form submitted successfully!');
        console.log('Form value:', this.registrationForm.value);
        
        this.registrationapi.userdata(this.registrationForm.value)
        .subscribe(
          response => {
            console.log('Backend response:', response); 
            if (response && response.email) {
              this.registrationapi.setuserEmail(response.email);
              this.router.navigate(['/entryhome']);
              console.log(response);
              
            }
            
          },
          error => {
            console.error('Error:', error);
          }
        );
      } else {
        console.log('Please fill in all required fields correctly.');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  }
  
}

