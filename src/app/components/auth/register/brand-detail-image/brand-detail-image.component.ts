import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-brand-detail-image',
  templateUrl: './brand-detail-image.component.html',
  styleUrls: ['./brand-detail-image.component.scss']
})
export class BrandDetailImageComponent implements OnInit {
  public brand = {};

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.brand['email'] = params['email'];
      this.brand['password'] = params['password'];
      this.brand['brand_name'] = params['brand_name'];
      this.brand['business_number'] = params['business_number'];
      this.brand['styles'] = params['styles'];
      this.brand['online_number'] = params['online_number'];
      this.brand['is_online_market'] = params['is_online_market'];
      this.brand['phone'] = params['phone'];
      this.brand['marketing'] = params['marketing'];
    });
  }

  ngOnInit() {
  }


  register() {
    this.auth.signUp(this.brand).subscribe(res => {
      console.log(res);
    })
  }
}
