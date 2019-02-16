import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  public phoneNumber: string;
  public verificationCode: string;
  public isChecked: boolean = false;



  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  smsCheck() {
    this.isChecked = !this.isChecked;
    // this.auth.phoneVerification(this.phoneNumber).subscribe(data => {
    //   console.log(data);
    // }, err => console.error(err));
  }

  certification() {
    this.router.navigateByUrl('register/createBrand');
  }

}
