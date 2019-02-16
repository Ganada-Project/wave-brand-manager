import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onRegister: boolean = false;

  constructor(public authService: AuthService) { }

  onEnteredRegister(entered: Boolean) {
    entered ? this.onRegister = true : this.onRegister = false;
  }
}
