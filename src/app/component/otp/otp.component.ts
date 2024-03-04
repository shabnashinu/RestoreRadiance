import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ElementRef, ViewChild } from '@angular/core';
import { RouteactivateService } from 'src/app/services/routeactivate.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  otpDigits: string[] = ['', '', '', '', '', ''];

  data!: any;
  param: any;

  userdata!: any;
  phoneNumber: Number = 0;

  @ViewChild('otp1') otp1Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp2') otp2Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp3') otp3Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp4') otp4Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp5') otp5Input!: ElementRef<HTMLInputElement>;
  @ViewChild('otp6') otp6Input!: ElementRef<HTMLInputElement>;
  auth: any;

  currentHint = '';

  constructor(
    private apicall: ApiService,
    private router: Router,
    private api: AuthServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (data: any) => {
        if (data) {
          this.param = data['option'];
          console.log(this.param);
        }
      },
    });

    this.apicall.getFormData().subscribe((FormData) => {
      this.userdata = FormData;
      console.log('formdata:', this.userdata);
    });

    // Subscribe to emitted phone number
    this.api.mobileNumberShareSubject$.subscribe({
      next: (data) => {
        this.phoneNumber = data;
      },
    });
  }

  moveFocus(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    // Move focus to the next input field if the current one is filled
    if (inputValue && index < this.otpDigits.length) {
      const nextInput = this.getNextInputElement(index);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  private getNextInputElement(index: number): HTMLInputElement | null {
    switch (index) {
      case 1:
        return this.otp2Input.nativeElement;
      case 2:
        return this.otp3Input.nativeElement;
      case 3:
        return this.otp4Input.nativeElement;
      case 4:
        return this.otp5Input.nativeElement;
      case 5:
        return this.otp6Input.nativeElement;
      default:
        return null;
    }
  }

  onSubmit() {
    if (this.param == 'user-verify') {
      this.verifyOtp();
    } else {
      this.verifyResetPassword();
    }
  }

  verifyResetPassword() {
    const joinedOtp: string = this.otpDigits.join('');

    console.log(joinedOtp);

    console.log(this.userdata);

    this.data = { phone: this.phoneNumber, otp: joinedOtp };

    console.log(this.data);

    this.apicall.forgotpassword(this.data).subscribe((res) => {
      console.log(res);

      this.api.saveToken(res.token);
      if (this.api.isAthenticated()) {
        console.log(this.api.getUserType);
          this.router.navigate(['/newpassword']);
        
      }
    });
  }

  // Function to verfiy otp when signup
  verifyOtp() {
    const joinedOtp: string = this.otpDigits.join('');

    console.log(joinedOtp);

    console.log(this.userdata);

    this.data = { ...this.userdata, otp: joinedOtp };

    console.log(this.data);

    this.apicall.verifyotp(this.data).subscribe((res) => {
      console.log(res);

      this.api.saveToken(res.token);
      if (this.api.isAthenticated()) {
        console.log(this.api.getUserType);

        if (this.api.getUserType() === 'user') {
          console.log('navigating');
          this.router.navigate(['/entryhome']);
        }
      }
    });
  }
}
