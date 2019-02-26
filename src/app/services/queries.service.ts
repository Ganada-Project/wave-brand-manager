import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {
  private brandData: any = {};
  public registering: boolean = false;

  constructor() {

  }

  saveQuery(values) {
    for(let i = 0 ; i < Object.keys(values).length; i++) {
      this.brandData[Object.keys(values)[i]] = Object.values(values)[i];
    }
    console.log(this.brandData)
  }

  getQuery() {
    return this.brandData;
  }

  isRegister() {
    this.registering = !this.registering;
  }
}
