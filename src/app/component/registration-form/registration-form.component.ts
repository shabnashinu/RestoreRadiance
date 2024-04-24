import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  companyName: string = '';
  address: string = '';
  contactPerson: string = '';
  email: string = '';
  phoneNumber: string = '';
  businessLicense!: File;
  proofOfInsurance!: File;
  constructionPermits!: File;
  safetyPlan!: File;
  projectPortfolio!: File;

  constructor(private registrationformapi: ApiService) {}

  onSubmit() {
    const formdata = new FormData();

    // Append form data fields to formData object
    formdata.append('companyName', this.companyName);
    formdata.append('address', this.address);
    formdata.append('contactPerson', this.contactPerson);
    formdata.append('email', this.email);
    formdata.append('phoneNumber', this.phoneNumber);

    // Append uploaded documents to formData object
    formdata.append('businessLicense', this.businessLicense);
    formdata.append('proofOfInsurance', this.proofOfInsurance);
    formdata.append('constructionPermits', this.constructionPermits);
    formdata.append('safetyPlan', this.safetyPlan);
    formdata.append('projectPortfolio', this.projectPortfolio);

    this.registrationformapi.registrationform(formdata).subscribe(
      (response) => {
      console.log('Form submission successful:', response);
      if (response && response.email) {
        this.registrationformapi.setEmail(response.email);
        console.log(response);
        
      }
    },
    (error)=>{
      console.error('Form submission error:', error);
    }
    );

    console.log(
      'Form submitted:',
      this.companyName,
      this.address,
      this.contactPerson,
      this.email,
      this.phoneNumber
    );
    console.log(
      'Documents:',
      this.businessLicense,
      this.proofOfInsurance,
      this.constructionPermits,
      this.safetyPlan,
      this.projectPortfolio
    );
  }

  handleFileInput(event: Event, documentType: string) {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
      const files = target.files;
      if (files.length > 0) {
        const file = files[0];
        switch (documentType) {
          case 'businessLicense':
            this.businessLicense = file;
            break;
          case 'proofOfInsurance':
            this.proofOfInsurance = file;
            break;
          case 'constructionPermits':
            this.constructionPermits = file;
            break;
          case 'safetyPlan':
            this.safetyPlan = file;
            break;
          case 'projectPortfolio':
            this.projectPortfolio = file;
            break;
          default:
            console.error('Invalid document type:', documentType);
        }
      } else {
        console.error('No file selected');
      }
    } else {
      console.error('Invalid event target');
    } 
  }
  getPdfUrl(file: File) {
    return URL.createObjectURL(file);
  }
}



