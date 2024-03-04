import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from 'src/app/component/adminhome/adminhome.component';
import { EntryhomeComponent } from 'src/app/component/entryhome/entryhome.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { NewpasswordComponent } from 'src/app/component/newpassword/newpassword.component';
import { OtpComponent } from 'src/app/component/otp/otp.component';
import { RegistrationFormComponent } from 'src/app/component/registration-form/registration-form.component';
import { ResetpasswordComponent } from 'src/app/component/resetpassword/resetpassword.component';
import { SignupComponent } from 'src/app/component/signup/signup.component';
import { UserRegistrationComponent } from 'src/app/component/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'newpassword', component: NewpasswordComponent },
  {path:'entryhome',component:EntryhomeComponent},
  {path:'registrationform',component:RegistrationFormComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'UserRegistration',component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthenticationRoutingModule {}
