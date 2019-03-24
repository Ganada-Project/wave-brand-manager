import { Component, OnInit } from '@angular/core';
import { ItemFeaturesService } from 'src/app/services/item-features.service';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-item-upload',
  templateUrl: './item-upload.component.html',
  styleUrls: ['./item-upload.component.scss']
})
export class ItemUploadComponent implements OnInit {
  postImg: any;
  public item: any = {
    "name": "",
    "price": null,
    "category1": -1,
    "category2": -1,
    "category3": -1,
    "sex": -1,
    "elasticity": null,
    "quality_arr": [],
    "thickness": null,
    "texture": null,
    "lining": null,
    "opacity": null,
    "season": null,
    "style": null,
    "remain": null,
    "country": null,
    "images": []
  };
  public classes: any = {
    name: { title: '상품명', cateogory: 'name', title2: '추가사항 (선택사항)' },
    price: { title: '판매가격', additional: 2, title2: '시즌', class: 'season' },
    sex: { title: '성별', categories: [{ name: '여성', id: 1 }, { name: '남성', id: 2 }, { name: '유니섹스', id: 3 }], categoryId: [] },
    category1: { title: '카테고리1', categories: [] },
    category2: { title: '카테고리2', categories: [], categoryId: [] },
    category3: { title: '카테고리3', categories: [], categoryId: [] },
    elasticity: { title: '신축성', categories: [], categoryId: [] },
    quality: { title: '재질', title2: '(숫자)', categories: [] },
    thickness: { title: '두께감', categories: [], categoryId: [] },
    texture: { title: '촉감', categories: [], categoryId: [] },
    lining: { title: '안감', categories: [], categoryId: [] },
    opacity: { title: '비침', categories: [], categoryId: [] },
    season: { title: '시즌', categories: [], categoryId: [] },
    style: { title: '스타일', categories: [], categoryId: [] },
    country: { title: '제조국', categories: [], categoryId: [] },
    id: { title: '품번' }
  };

  qualities = [
    { id: null, value: null }
  ];



  constructor(private itemFeature: ItemFeaturesService) {
    itemFeature.getCategories(1).subscribe(res => {
      console.log(res);
      this.classes.category1.categories = res['category1'];
      itemFeature.getQualities().subscribe(qual => {
        console.log(qual['qualities']);
        this.classes.quality.categories = qual['qualities'];
      })
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  selectedSex() {
    this.itemFeature.getCategories(1).subscribe(res => {
      this.classes['category1'].categories = res['category1'];
    }, err => {
      console.log(err);
    })
  }

  updateCategory(num, cat) {
    console.log(cat);
    this.itemFeature.getCategories(num, cat).subscribe(res => {
      console.log(res);
      this.classes[`category${num}`].categories = res[`category${num}`];
    }, err => {
      console.log(err);
    });
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.postImg = reader.result;
        this.item['images'].push(this.postImg);
        // console.log(reader.result);
      }
    };
  }

  upload() {
    console.log(this.item)
    this.itemFeature.upload(this.item).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  addQuality() {
    this.qualities.push({id: null, value: null });
  }



}
