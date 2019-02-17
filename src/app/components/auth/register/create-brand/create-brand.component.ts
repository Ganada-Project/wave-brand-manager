import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {
  public telemarketed: boolean = false;
  public telemarketingNumber: string;
  public brand = {};

  constructor(private router: Router, private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      this.brand['phone'] = params['phone'];
    });
  }

  ngOnInit() {
  }

  gotoDetails() {
    if (this.telemarketed) {
      this.brand['telemarketing'] = this.telemarketingNumber;
      this.brand['is_online_market'] = this.telemarketed;
    }
    this.router.navigate(['register/brandDetails'], { skipLocationChange: true, queryParams: this.brand });
  }

}
