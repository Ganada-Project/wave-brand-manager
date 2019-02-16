import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public User: any;
  public readonly env = environment;
  @Output() entered = new EventEmitter<Boolean>();

  constructor(private title: Title, private auth: AuthService) { 
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
      if(!this.env.production) {
        console.log(re);
      }
    }, err => {
      console.error(err);
    });
  }



}
