import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-detail-login',
  templateUrl: './brand-detail-login.component.html',
  styleUrls: ['./brand-detail-login.component.scss']
})
export class BrandDetailLoginComponent implements OnInit {
  public brand = {};

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.brand['brand_name'] = params['name'];
      this.brand['business_number'] = params['corporateRegNum'];
      this.brand['styles'] = params['selectedStyles'];
      this.brand['online_number'] = params['telemarketing'];
      this.brand['is_online_market'] = params['is_online_market'];
      this.brand['phone'] = params['phone'];
      this.brand['marketing'] = true;
    });
  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.brand); }

  gotoNext() {
    this.router.navigate(['/register/brandImage'], { skipLocationChange: true, queryParams: this.brand });
  }
}
