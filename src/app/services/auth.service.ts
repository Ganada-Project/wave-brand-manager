import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public readonly isTest = environment.production;
  public readonly apiUrl = environment.apiUrl;
  public readonly baseUrl = environment.baseUrl;
  public token: any;
  public tokenId: string = "loggedUser";
  public httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    if (localStorage.getItem(this.tokenId)) {
      this.token = localStorage.getItem(this.tokenId)["token"];
    }
  }

  getToken() {
    return localStorage.getItem(this.tokenId)["token"];
  }

  isLoggedIn() {
    if (localStorage.getItem(this.tokenId)) {
      return true;
    }
    return false;
  }

  login(user) {
    let url = this.apiUrl + "/auth/login/brand";
    return this.http.post(url, user).pipe(
      map((response: Response) => {
        // login successful if there's a jwt token in the response
        this.token = response["token"];
        if (this.token) {
          // store expiresIn and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            this.tokenId,
            JSON.stringify({ token: this.token })
          );
        }
        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem("loggedUser");
    this.router.navigate(["/home"]);
    console.log(this.isLoggedIn());
  }

  signUp(brandInfo) {
    if (!this.isTest) {
      console.log(brandInfo);
    }
    let url = this.apiUrl + "/auth/register/brand";
    return this.http.post(url, brandInfo, this.httpOptions).pipe(
      map(response => {
        this.token = response["token"];
        if (this.token) {
          localStorage.setItem(
            this.tokenId,
            JSON.stringify({ token: this.token })
          );
        }
        return response;
      })
    );
  }

  phoneVerification(phoneNumber) {
    let url = `${this.apiUrl}/auth/phone?phone=${phoneNumber}`;
    return this.http.get(url, this.httpOptions);
  }
}
