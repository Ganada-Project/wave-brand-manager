import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { QueriesService } from '../services/queries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public loggedIn: boolean = false;
  
  constructor(public authService: AuthService, public queries: QueriesService) { 
    this.loggedIn = authService.isLoggedIn();
  }
}
