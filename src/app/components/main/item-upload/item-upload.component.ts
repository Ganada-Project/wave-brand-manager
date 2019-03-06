import { Component, OnInit } from '@angular/core';
import { ItemFeaturesService } from 'src/app/services/item-features.service';

@Component({
  selector: 'app-item-upload',
  templateUrl: './item-upload.component.html',
  styleUrls: ['./item-upload.component.scss']
})
export class ItemUploadComponent implements OnInit {
  public item: any = {
    "name":"",
    "price": null,
    "category1":-1,
    "category2":-1,
    "category3":-1,
    "sex":-1,
    "elasticity":1,
    "quality":1,
    "thickness":1,
    "texture":1,
    "lining":1,
    "opacity":1,
    "season":1,
    "style":1,
    "remain":1,
    "images":[]
  };
  public classes: any = {
    name : { title: '상품명', cateogory: 'name', title2: '추가사항 (선택사항)' },
    price : { title: '판매가격', additional: 2, title2: '시즌', class: 'season' },
    sex: { title: '성별', categories: [{name: '여성', id: 1}, {name: '남성', id: 2}, {name: '유니섹스', id: 3}], categoryId: [] },
    category1: { title: '카테고리1', categories: [] },
    category2: { title: '카테고리2', categories: [], categoryId: [] },
    category3: { title: '카테고리3', categories: [], categoryId: [] },
    elasticity: { title: '신축성', categories: [], categoryId: [] },
    quality: { title: '재질' },
    thickness: { title: '두께감', categories: [], categoryId: [] },
    texture: { title: '촉감', categories: [], categoryId: [] },
    lining: { title: '안감', categories: [], categoryId: [] },
    opacity: { title: '비침', categories: [], categoryId: [] },
    season: { title: '시즌', categories: [], categoryId: [] },
    style: { title: '스타일', categories: [], categoryId: [] },
    id: { title: '품번' }
  };



  constructor(private itemFeature: ItemFeaturesService) {
    itemFeature.getCategories(1).subscribe(res => {
      this.classes.category1.categories = res['category1'];
    }, err => {
      console.log(err);
    });

    itemFeature.getCategories(2, this.item.category1).subscribe(res => {
      this.classes.category2.categories = res['category2'];
    }, err => {
      console.log(err);
    });

  }

  ngOnInit() {
  }

  selectedSex() {
    this.itemFeature.getCategories(1).subscribe(res => {
      this.classes['category1'].categories=  res['category1'];
    }, err => {
      console.log(err);
    })
  }

  onChangeCat(num) {
    
  }

  updateCategory(num) {
    this.itemFeature.getCategories(num, this.classes[`category${num}`]).subscribe(res => {
      this.classes[`category${num+1}`].categories = res[`category${num+1}`];
    }, err => {
      console.log(err);
    });
  }

}
