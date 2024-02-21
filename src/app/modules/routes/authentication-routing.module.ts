import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { NewpasswordComponent } from 'src/app/component/newpassword/newpassword.component';
import { OtpComponent } from 'src/app/component/otp/otp.component';
import { ResetpasswordComponent } from 'src/app/component/resetpassword/resetpassword.component';
import { SignupComponent } from 'src/app/component/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'newpassword', component: NewpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthenticationRoutingModule {}
