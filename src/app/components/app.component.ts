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
    
  }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.loggedIn = this.authService.isLoggedIn();
  }
}
