import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json, response } from 'express';
import { ApiService } from 'src/app/services/api.service';

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
  response!:any

  constructor(private api:ApiService,private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log('Form submitted:', this.signupForm.value); 
      const formValue = this.signupForm.value 

      this.api.createUser(formValue)
      .subscribe(response=>{
        console.log('successful',response);
        this.response = response
        
      },error=>{
        console.log('not valid',error);
        
      }
      )
    }

  }


}
