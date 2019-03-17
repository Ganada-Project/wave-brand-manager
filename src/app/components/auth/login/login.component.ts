import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../../environments/environment';
import { QueriesService } from 'src/app/services/queries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public User: any;
  public readonly env = environment;
  @Output() entered = new EventEmitter<Boolean>();

  constructor(private title: Title, private auth: AuthService, private queries: QueriesService, private router: Router) { 
    this.User = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {  
    this.title.setTitle('login');
    this.entered.emit(true);
  }

  login() {
    this.auth.login(this.User).subscribe(re => {
      this.router.navigate(["/main"]);
      if(!this.env.production) {
        console.log(re);
      }
    }, err => {
      console.error(err);
    });
  }

  onRegister() {
    this.queries.isRegister();
  }



}
