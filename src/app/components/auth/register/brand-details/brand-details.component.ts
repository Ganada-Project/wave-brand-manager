import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { RoutingState } from 'src/app/routingState';
import { trigger } from '@angular/animations';
import { QueriesService } from 'src/app/services/queries.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss'],
  animations: [
    trigger('clickImage', [
      
    ])
  ]
})
export class BrandDetailsComponent implements OnInit {
  public brand = {};
  public styles: any;
  public selectedStyles = [];
  previousRoute: string;

  constructor(private router: Router, private queries: QueriesService, private route: ActivatedRoute, private routingState: RoutingState, private location: Location) {
    // this.brand = params.get('brand');
    // this.route.queryParams.subscribe(params => {
    //   this.brand['phone'] = params['phone'];
    //   this.brand['name'] = params['name'];
    //   this.brand['corporateRegNum'] = params['corporateRegNum'];
    //   this.brand['telemarketing'] = params['telemarketing'];
    //   this.brand['is_online_market'] = params['is_online_market'];
    // });

    this.styles = [
      {
        id: 1,
        title: '캐쥬얼',
        imgUrl: 'assets/img/styles/001-casual.png',
        selected: false
      },
      {
        id: 2,
        title: '클래식',
        imgUrl: 'assets/img/styles/002-classic.png',
        selected: false
      },
      {
        id: 3,
        title: '오피스',
        imgUrl: 'assets/img/styles/003-office.png',
        selected: false
      },
      {
        id: 4,
        title: '스포츠',
        imgUrl: 'assets/img/styles/004-sports.png',
        selected: false
      },
      {
        id: 5,
        title: '스트릿',
        imgUrl: 'assets/img/styles/005-street.png',
        selected: false
      },
      {
        id: 6,
        title: '미니멀',
        imgUrl: 'assets/img/styles/006-minimal.png',
        selected: false
      },
      {
        id: 7,
        title: '빈티지',
        imgUrl: 'assets/img/styles/007-vintage.png',
        selected: false
      },
      {
        id: 8,
        title: '그런지',
        imgUrl: 'assets/img/styles/008-grunge.png',
        selected: false
      },
      {
        id: 9,
        title: '유니크',
        imgUrl: 'assets/img/styles/009-special.png',
        selected: false
      },
      {
        id: 10,
        title: '파티',
        imgUrl: 'assets/img/styles/010-party.png',
        selected: false
      },
      {
        id: 11,
        title: '아티스트',
        imgUrl: 'assets/img/styles/011-art.png',
        selected: false
      },
      {
        id: 12,
        title: '유니섹스',
        imgUrl: 'assets/img/styles/012-unisex.png',
        selected: false
      },
    ]
  }
  ngOnInit() {
    this.previousRoute = this.routingState.getPreviousUrl();
  }

  selectStyle(style: any) {
    this.styles.forEach(element => {
      if (element.title == style.title) {
        element.selected = !element.selected;
        if (element.selected && !this.selectedStyles.includes(element.id)) {
          this.selectedStyles.push(Number(element.id));
        } else {
          this.selectedStyles.splice(this.selectedStyles.indexOf(Number(element.id)), 1);
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }

  gotoNext() {
    // this.brand.selectedStyles = this.selectedStyles;
    this.brand['styles'] = this.selectedStyles;
    this.queries.saveQuery(this.brand);
    this.router.navigate(['register/brandLogin']);
  }

}