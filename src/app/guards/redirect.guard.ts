import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate  {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('loggedUser')) {
      this.router.navigate(['/main']);
      return true;
      
    } else {
      localStorage.clear();
      return false;
    }
  }
}
