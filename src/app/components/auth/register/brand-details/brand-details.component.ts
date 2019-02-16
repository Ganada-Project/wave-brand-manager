import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { RoutingState } from 'src/app/routingState';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {
  public brand: any;
  public styles: any;
  public selectedStyles: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private routingState: RoutingState) {
    // this.brand = params.get('brand');
    this.route.queryParams.subscribe(params => {
      this.brand = params;
    });

    this.styles = [
      {
        title: '캐쥬얼',
        imgUrl: 'assets/img/styles/001-casual.png',
        selected: false
      },
      {
        title: '클래식',
        imgUrl: 'assets/img/styles/002-classic.png',
        selected: false
      },
      {
        title: '오피스',
        imgUrl: 'assets/img/styles/003-office.png',
        selected: false
      },
      {
        title: '스포츠',
        imgUrl: 'assets/img/styles/004-sports.png',
        selected: false
      },
      {
        title: '스트릿',
        imgUrl: 'assets/img/styles/005-street.png',
        selected: false
      },
      {
        title: '미니멀',
        imgUrl: 'assets/img/styles/006-minimal.png',
        selected: false
      },
      {
        title: '빈티지',
        imgUrl: 'assets/img/styles/007-vintage.png',
        selected: false
      },
      {
        title: '그런지',
        imgUrl: 'assets/img/styles/008-grunge.png',
        selected: false
      },
      {
        title: '유니크',
        imgUrl: 'assets/img/styles/009-special.png',
        selected: false
      },
      {
        title: '파티',
        imgUrl: 'assets/img/styles/010-party.png',
        selected: false
      },
      {
        title: '아티스트',
        imgUrl: 'assets/img/styles/011-art.png',
        selected: false
      },
      {
        title: '유니섹스',
        imgUrl: 'assets/img/styles/012-unisex.png',
        selected: false
      },
    ]
  }
  ngOnInit() {

  }

  selectStyle(style: any) {
    this.styles.forEach(element => {
      if (element.title == style.title) {
        element.selected = !element.selected;
        if (element.selected && !this.selectedStyles.includes(element.title)) {
          this.selectedStyles.push(element.title);
        } else {
          this.selectedStyles.splice(this.selectedStyles.indexOf(element.title), 1);
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }

  gotoNext() {
    this.brand['selectedStyles'] = this.selectedStyles;
    this.router.navigate(['register/brandDetails'], { queryParams: this.brand });
  }
} 
