import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-useruploads',
  templateUrl: './useruploads.component.html',
  styleUrls: ['./useruploads.component.css'],
})
export class UseruploadsComponent {
  email!: string;
  picture: string = '';
  budget: string = '';
  res: any[] = [];
  showUpdateForm: string | null = null;
  userType = this.auth.getUserType()

  formdata = new FormData();
 

  constructor(private service: ApiService , private auth:AuthServiceService) {}

  onFileSelected(event: any) {
    const picture = event.target.files[0];
    if (picture) {
      this.picture = picture;
      this.formdata.set('picture',picture);
    }
  }

  ngOnInit(): void {
    this.getuseruplod();
  }
  getuseruplod() {
    this.service.getuseruploads().subscribe({
      next: (response) => {
        this.res = response;
        console.log(response);
      },
      error: (error) => {
        console.error('Error retrieving user data:', error);
      },
    });
  }


  openUpdateForm(email: string) {
    this.email = email;
    this.showUpdateForm = email;
  }

  closeUpdateForm() {
    this.showUpdateForm = null;
  }

  updateUserData() {
    this.formdata.append('email', this.email);
    this.formdata.append('budget', this.budget);

    this.service.updateuser(this.formdata).subscribe({
      next: (response) => {
        console.log('User data updated successfully:', response);
        this.getuseruplod();
        this.closeUpdateForm();
      },
      error: (error) => {
        console.error('Error updating user data:', error);
      },
    });
  }



  deleteuserupload(email: string) {
    this.service.deleteUploads(email).subscribe({
      next: (response) => {
        console.log('User upload deleted successfully:', response);
        this.getuseruplod();
      },
      error: (error) => {
        console.error('Error deleting user upload:', error);
      },
    });
  }
}
