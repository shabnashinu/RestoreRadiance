import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css'],
})
export class AdminhomeComponent implements OnInit {
  numberofusers = 0;
  numberofcompanies = 0;
  companyclick = false;
  clicked = false;
  users: any[] = [];
  companies: any[] = [];

  click() {
    this.clicked = true;
  }


  companclicked() {
    this.companyclick = true;
  }


  constructor(private service: ApiService) {}

  ngOnInit(): void {
    //fetching users
    this.service.listuser().subscribe(
      (data) => {
        this.users = data;
        this.numberofusers = this.users.length;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );



    //fetching companies
    this.service.getcompanies().subscribe(
      (data) => {
        this.companies = data;
        this.numberofcompanies = this.companies.length;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  //sending email to company
  sendingemailtocompanies(email:string){
    this.service.approvecompany({email:email}).subscribe(
      ()=>{
        console.log('email send succesfully');
      },
      (error)=>{
        console.error('error sending email',error)
      }
    )
  }


  //sending email for users
  sendingmessage(email: string) {
    this.service.acceptuser({ email: email }).subscribe(
      () => {
        console.log('Email sent successfully');
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }


}
