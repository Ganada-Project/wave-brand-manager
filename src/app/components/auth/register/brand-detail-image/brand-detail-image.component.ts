import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-brand-detail-image',
  templateUrl: './brand-detail-image.component.html',
  styleUrls: ['./brand-detail-image.component.scss']
})
export class BrandDetailImageComponent implements OnInit {
  public brand = {};

  constructor(private route: ActivatedRoute, private queries: QueriesService, private router: Router, private auth: AuthService, private location: Location) {
    this.brand = queries.getQuery();
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  register() {
    this.auth.signUp(this.brand).subscribe(res => {
      console.log(res);
    })
  }
}
