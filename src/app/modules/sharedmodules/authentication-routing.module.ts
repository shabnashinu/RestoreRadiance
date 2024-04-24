import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from 'src/app/component/adminhome/adminhome.component';
import { ChatComponent } from 'src/app/component/chat/chat.component';
import { CompanyuploadsComponent } from 'src/app/component/companyuploads/companyuploads.component';
import { EntryhomeComponent } from 'src/app/component/entryhome/entryhome.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { LoadingComponent } from 'src/app/component/loading/loading.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { NewpasswordComponent } from 'src/app/component/newpassword/newpassword.component';
import { OtpComponent } from 'src/app/component/otp/otp.component';
import { ProjectuploadComponent } from 'src/app/component/projectupload/projectupload.component';
import { RegistrationFormComponent } from 'src/app/component/registration-form/registration-form.component';
import { ResetpasswordComponent } from 'src/app/component/resetpassword/resetpassword.component';
import { SignupComponent } from 'src/app/component/signup/signup.component';
import { UploadComponent } from 'src/app/component/upload/upload.component';
import { UserRegistrationComponent } from 'src/app/component/user-registration/user-registration.component';
import { UseruploadsComponent } from 'src/app/component/useruploads/useruploads.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'newpassword', component: NewpasswordComponent },
  { path:'entryhome',component:EntryhomeComponent},
  { path:'registrationform',component:RegistrationFormComponent},
  { path:'adminhome',component:AdminhomeComponent},
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path:'upload', component:UploadComponent},
  { path:'useruploads',component:UseruploadsComponent},
  { path: 'uploadprojects', component: ProjectuploadComponent },
  { path: 'companyupload', component: CompanyuploadsComponent },
  {path:'chat',component:ChatComponent}
  
  
];

@NgModule({
  declarations:[
    
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthenticationRoutingModule {}
