import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  email: string = '';
  picture!: string;
  budget: string = '';
  registrationmessage: string = '';

  formData = new FormData();

  constructor(private service: ApiService, private router: Router) {}

  onFileSelected(event: any) {
    const picture = event.target.files[0];
    if (picture) {
      this.picture = picture;
      this.formData.set('picture',picture);
    }
  }

  onSubmit() {
    this.formData.append('email', this.email);
    this.formData.append('budget', this.budget);

    console.log(this.formData);

    this.service.isUserRegistered(this.formData).subscribe({
      next: (data) => {
        console.log(data);
        if (data.registered) {
          console.log('User is registered');
          this.router.navigate(['/useruploads']);
        } else {
          console.log('User is not registered');
          this.registrationmessage = 'You need to register first.'; 
        }
      },
      error: (error) => {
        console.log('Error checking registration:', error);
      },
    });
  }
}
