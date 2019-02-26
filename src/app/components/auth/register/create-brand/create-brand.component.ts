import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {
  public telemarketed: boolean = false;
  public telemarketingNumber: string;
  public brand = {};

  constructor(private router: Router, private queries: QueriesService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  gotoDetails() {
    this.brand['telemarketing'] = this.telemarketingNumber;
    this.brand['is_online_market'] = this.telemarketed;

    this.queries.saveQuery(this.brand);
    this.router.navigate(['register/brandDetails']);
  }

}
