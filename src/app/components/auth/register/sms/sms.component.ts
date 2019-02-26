import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  public phoneNumber: string;
  public verificationCode: number;
  public receivedCode: number;
  public isChecked: boolean = false;



  constructor(private auth: AuthService, private queries: QueriesService, private router: Router) { }

  ngOnInit() {
  }

  smsCheck() {
    this.isChecked = !this.isChecked;
    // this.auth.phoneVerification(this.phoneNumber).subscribe(data => {
    //   this.receivedCode = data['verification_code'];
    //   console.log(data['verification_code']);
    // }, err => console.error(err));
  }

  certification() {
    this.queries.saveQuery({phone: this.phoneNumber});
    this.router.navigate(['register/createBrand']);
  }

}
