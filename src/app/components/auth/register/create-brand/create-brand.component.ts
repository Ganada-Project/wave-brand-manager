import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {
  public telemarketed: boolean = false;
  public telemarketingNumber: string;
  public brand: any;

  constructor(private router: Router) { 
    this.brand = {
      name: "",
      corporateRegNum: ""
    };
  }

  ngOnInit() {
  }

  gotoDetails() {
    if (this.telemarketed) {
      this.brand['telemarketing'] = this.telemarketingNumber;
    }
    this.router.navigate(['register/brandDetails'], {queryParams: this.brand});
  }

}
