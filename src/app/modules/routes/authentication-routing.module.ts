import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { SignupComponent } from 'src/app/component/signup/signup.component';


const routes: Routes = [
 {path:"signup",component:SignupComponent},
 {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthenticationRoutingModule {}
