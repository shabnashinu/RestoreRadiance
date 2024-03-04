import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css'],
})
export class AdminhomeComponent implements OnInit {
  numberofusers = 0;
  clicked = false;
  users: any[] = [];

  click() {
    this.clicked = true;
  }

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.listuser().subscribe(
      (data) => {
        this.users = data;
        this.numberofusers = this.users.length;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  sendingmessage(email: string) {
    this.service.acceptuser({email:email}).subscribe(() => {
      console.log('Email sent successfully');
        
      },
      (error) => {
        console.error('Error sending email:', error);
       
      }
    )
  }
}
