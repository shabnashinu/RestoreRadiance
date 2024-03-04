import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AthenticationRoutingModule, } from '../sharedmodules/authentication-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { SignupComponent } from 'src/app/component/signup/signup.component';
import { OtpComponent } from 'src/app/component/otp/otp.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from 'src/app/component/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { NewpasswordComponent } from 'src/app/component/newpassword/newpassword.component';
import { EntryhomeComponent } from 'src/app/component/entryhome/entryhome.component';
import { RegistrationFormComponent } from 'src/app/component/registration-form/registration-form.component';
import { AdminhomeComponent } from 'src/app/component/adminhome/adminhome.component';
import { UserRegistrationComponent } from 'src/app/component/user-registration/user-registration.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    OtpComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    NewpasswordComponent,
    EntryhomeComponent,
    RegistrationFormComponent,
    AdminhomeComponent,
    UserRegistrationComponent
 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AthenticationRoutingModule,
    CommonModule,
    HttpClientModule
  ],
})
export class authentication {}
