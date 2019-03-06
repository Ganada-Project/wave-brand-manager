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
  public httpOptions: any;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.token = auth.getToken();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getCategories(id, category?: number) {
    let url = this.apiUrl + `/category/category${id}`;
    if(category) {
      url = url + `/${category}`;
    }
    this.httpOptions.headers['x-access-token'] = this.token;
    return this.http.get(url, this.httpOptions);
  }
}
