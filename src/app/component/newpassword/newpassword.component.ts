import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent {
  getphone:any
  password: any;
  confirmPassword: any;

  constructor(private resetapi:ApiService , private router:Router){}
  
  resetpassword(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    this.resetapi.phonedata$.subscribe(phone =>{
      this.getphone = phone
    })

    this.resetapi.resetpassword({password:this.password,phone:this.getphone}).subscribe(
      (response) => {
        console.log('Password reset successful:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error resetting password:', error);
      }
    );
  }
}

