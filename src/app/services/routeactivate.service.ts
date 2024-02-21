import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteactivateService implements CanActivate {

  constructor(private apicall :ApiService ,private router: Router,private authService:AuthServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.authService.isAthenticated()) {
      
      const userType = this.authService.getUserType();
      
      console.log(userType +'-----------------------------------hai guysss');
      if ( userType === 'user') {
        return true; // Allow access to user routes only for user type
      } else if ( userType === 'admin'){
      return true; // Allow access to admin routes only for admin type
      }
      // Redirect to login if user type doesn't match route
      this.router.navigate(['/login']);
      return false;
    } else {
      // Redirect to login if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}

