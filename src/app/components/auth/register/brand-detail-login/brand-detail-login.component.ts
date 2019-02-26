import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger } from '@angular/animations';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-brand-detail-login',
  templateUrl: './brand-detail-login.component.html',
  styleUrls: ['./brand-detail-login.component.scss'],
  animations: [],
})
export class BrandDetailLoginComponent implements OnInit {
  public brand = {};
  public checked = true;

  constructor(private router: Router, private queries: QueriesService, private route: ActivatedRoute, private location: Location) {
    this.brand['marketing'] = true;
  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.brand); }

  goBack() {
    this.location.back();
  }

  gotoNext() {
    this.queries.saveQuery(this.brand);
    this.router.navigate(['/register/brandImage']);
  }
}
