import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { LocationStrategy } from '@angular/common';

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
  public resend: boolean = false;
  public modelUp: boolean = false;

  public timeLeft: number = 1;
  private interval: any;

  constructor(private auth: AuthService, private queries: QueriesService, private router: Router, private dialog: MatDialog, location: LocationStrategy) { 
    
  }

  ngOnInit() {
  }

  smsCheck() {
    this.isChecked = !this.isChecked;
    this.startTimer();
    this.auth.phoneVerification(this.phoneNumber).subscribe(data => {
      this.receivedCode = data['verification_code'];
      console.log(data['verification_code']);
    }, err => console.error(err));
  }

  openDialog() {
    const dialogRef = this.dialog.open(ResendDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.resend);

    })
  }

  resendSMS() {
    this.resend = false;
    this.timeLeft = 1;
    this.startTimer();
    this.auth.phoneVerification(this.phoneNumber).subscribe(data => {
      this.receivedCode = data['verification_code'];
      console.log(data['verification_code']);
    }, err => console.error(err));
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.resend = true;
        this.pauseTimer();
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  certification() {
    if (this.receivedCode == this.verificationCode) {
      this.queries.saveQuery({phone: this.phoneNumber});
      this.router.navigate(['register/createBrand']);
    } else {

    }
  }

}

@Component({
  selector: 'resend-dialog',
  templateUrl: 'resend-dialog.html'
})
export class ResendDialogComponent {
  constructor(private dialogRef: MatDialogRef<ResendDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close({resend: false});
  }

  onOkClick(): void {
    this.dialogRef.close({resend: false});
  }
}