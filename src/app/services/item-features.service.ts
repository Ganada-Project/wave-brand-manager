import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemFeaturesService {
  public readonly isTest = environment.production;
  public readonly apiUrl = environment.apiUrl;
  public readonly baseUrl = environment.baseUrl;
  public token: any;
  private httpOptions: any;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.token = JSON.parse(localStorage.getItem("loggedUser"));
    
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token['token']
      })
    };
  }

  getCategories(id, category?: number) {
    let url = this.apiUrl + `/category/category${id}`;
    if(category) {
      url = url + `/${category}`;
    }
    return this.http.get(url, this.httpOptions);
  }

  upload(item:any) {
    console.log(this.token['token']);
    let url = this.apiUrl + `/item`;
    return this.http.post(url, item, this.httpOptions);
  }

  getQualities() {
    let url = this.apiUrl + `/feature/quality`;
    return this.http.get(url, this.httpOptions);
  }
}
