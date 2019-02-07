import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('user')) {
      return true;
    }

    localStorage.clear();
    this.router.navigate(['/signIn']);
    return false;
  }
}
