import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-companyuploads',
  templateUrl: './companyuploads.component.html',
  styleUrls: ['./companyuploads.component.css']
})
export class CompanyuploadsComponent {
  uploads!: any[];
  showUpdateForm: string | null = null;
  picture: string = '';
  email!: string;
  Newtitle:string = '';
  newdescription:string = '';
  usertype = this.auth.getUserType()
  getuseremail:any
  formdata = new FormData();

  constructor(private service: ApiService , private auth:AuthServiceService, private route:Router) { }



  onFileSelected(event: any) {
    const picture = event.target.files[0];
    if (picture) {
      this.picture = picture;
      this.formdata.set('picture',picture);
    }
  }

  ngOnInit(): void {
   this.getcompany()
   this.service.userEmail$.subscribe(res=>this.getuseremail=res)

  }

  getcompany(): void {
    this.service.getcompanyuploads()
      .subscribe({next:(response)=>{
        this.uploads = response
        console.log(response);
        
      },
      error: (error) => {
        console.error('Error retrieving user data:', error);
      },
    })
  }

  openUpdateForm(email:string) {
    this.email = email
    this.showUpdateForm = email;
    }

    closeUpdateForm() {
      this.showUpdateForm = null;
    }

  updatecompanydata() {
    this.formdata.append('email', this.email);
    this.formdata.append('title', this.Newtitle);
    this.formdata.append('description',this.newdescription)

    this.service.updatecompany(this.formdata).subscribe({
      next: (response) => {
        console.log('User data updated successfully:', response);
        this.getcompany();
        this.closeUpdateForm();
      },
      error: (error) => {
        console.error('Error updating user data:', error);
      },
    });
    }

    
  deleteupload(email: string) {
    this.service.deletecompanyUploads(email).subscribe({
      next: (response) => {
        console.log('User upload deleted successfully:', response);
        this.getcompany();
      },
      error: (error) => {
        console.error('Error deleting user upload:', error);
      },
    });
  }
  openChat(){
    this.route.navigate(['/chat'])
  }

}
