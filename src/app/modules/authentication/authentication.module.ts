import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AthenticationRoutingModule, } from '../routes/authentication-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AthenticationRoutingModule,
    CommonModule,
  ],
})
export class authentication {}
