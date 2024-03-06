import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'autoprefixer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-entryhome',
  templateUrl: './entryhome.component.html',
  styleUrls: ['./entryhome.component.css']
})
export class EntryhomeComponent {
 

 constructor(private service:ApiService , private router:Router){}
  checkRegistration(): void {
    // Check if the user is registered
    const isRegistered = this.service.isUserRegistered(data); 
    
    if (!isRegistered) {
      alert("You need to register first!");
    } else {
      // Navigate to the upload page if the user is registered
      this.router.navigate(['/upload']);
    }
  }
}
