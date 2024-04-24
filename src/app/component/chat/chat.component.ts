import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messagesSended: any[] = [];
  messagesReceived: any[] = [];
  currentMessage: string = '';
  userId!: string;
  companyid!: string;
  userType!: string;
  currentUser!: string;
  constructor(
    private chatService: ChatService,
    private authService: AuthServiceService,
    private route: ActivatedRoute,
    private service: ApiService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userType = params['userType'];
      console.log(this.userType);

      if (this.userType === 'user') {
        console.log('user');
        this.companyid = params['companyid'];
      } else {
        if (this.userType === 'company') {
          console.log('company');
          this.userId = params['userid'];
        }
      }
    });

    if (this.userType == 'company') {
      const userid = this.authService.getUserId();
      this.service.useremail(userid).subscribe({
        next: (response) => {
          console.log(response.email);
          this.companyid = response.email;
          console.log(this.userId, this.companyid);
          
        this.currentUser = this.companyid;
        console.log(this.currentUser);
        this.chatService.joinRoom(this.currentUser);
        },
      });
    } else if (this.userType == 'user') {
      const userid = this.authService.getUserId();
      this.service.useremail(userid).subscribe({
        next: (response) => {
          console.log(response.email);
          this.userId = response.email;
          console.log(this.userId, this.companyid);
          this.currentUser = this.userId;
          console.log(this.currentUser);
          this.chatService.joinRoom(this.currentUser);
        },
      });
    }

    this.chatService.getMessage().subscribe((message) => {
      console.log(message);
      if (message.senderId === this.currentUser) {
        this.messagesSended.push(message);
        console.log(this.messagesSended);
      } else if (message.receiverId === this.currentUser) {
        this.messagesReceived.push(message);
        console.log(this.messagesReceived);
      }
    });
  }
  sendMessage() {
    if (this.currentMessage.trim() !== '') {
      // Determine the sender ID based on user type
      const senderId =
        this.userType === 'company' ? this.companyid : this.userId;
      const receiverId =
        this.userType === 'company' ? this.userId : this.companyid;
      const message = {
        senderId: senderId,
        receiverId: receiverId,
        message: this.currentMessage,
      };
      this.chatService.sendMessage(message);
      this.currentMessage = '';
    }
  }
}
