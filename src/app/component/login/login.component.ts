import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error: any;
  loginform!: NgForm;
  isloading:boolean=false

  constructor(
    private api: ApiService,
    private authservice: AuthServiceService,
    private route: Router
  ) {}
  email: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    this.isloading=true
    console.log('Form submitted!');
    console.log(form.value);

    this.authservice.loginUser(form.value).subscribe(
      (response) => {
        console.log(response);
        
        this.authservice.saveToken(response.token);
        if (this.authservice.isAthenticated()) {
          const userType = this.authservice.getUserType();
          console.log(userType);
          this.isloading=false
          if (userType === 'user' || userType === 'company') {
            this.route.navigate(['/entryhome']);
          } else if (userType === 'admin') {
            this.route.navigate(['/admin/home']);
          }
          console.log(response);
          this.error = response.error;
        }
      },
      (error: any) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
