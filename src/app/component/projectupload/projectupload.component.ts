import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-projectupload',
  templateUrl: './projectupload.component.html',
  styleUrls: ['./projectupload.component.css']
})
export class ProjectuploadComponent {

  email: string = '';
  title:string ='';
  description:string = '';
  picture!: string;
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
    this.formData.append('email',this.email)
    this.formData.append('title',this.title)
    this.formData.append('description',this.description)


    this.service.iscompanyregistered(this.formData).subscribe({
      next: (data) => {
        console.log(data);
        if (data.registered) {
          console.log('company is registered');
          this.router.navigate(['/companyuploads']);
        } else {
          console.log('company is not registered');
          this.registrationmessage = 'You need to register first.'; 
        }
      },
      error: (error) => {
        console.log('Error checking registration:', error);
      },
    });
  }
  
}
