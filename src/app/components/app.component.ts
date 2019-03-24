import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { QueriesService } from "../services/queries.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public selectedType: string;

  constructor(
    public authService: AuthService,
    public queries: QueriesService,
    public router: Router
  ) {}

  ngOnInit() {
    this.checkIsSelectedByUrl();
  }

  checkLoggedIn() {
    return this.authService.isLoggedIn();
  }

  checkIsSelectedByUrl() {
    const url = location.pathname;
    const mainTypeArr = url.split("/");
    const targetType = mainTypeArr[1];
    this.selectedType = targetType;
  }

  clickDebug() {
    console.log('button clicked!');
    console.log(this.checkLoggedIn());
  }

  // uncheck registering boolean
  notRegistering() {
    if (this.queries.registering) {
      this.queries.isRegister();
    }
  }
}
