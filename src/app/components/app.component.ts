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

  constructor(
    public authService: AuthService,
    public queries: QueriesService,
    public router: Router
  ) {}

  ngOnInit() {
  }

  checkLoggedIn() {
    return this.authService.isLoggedIn();
  }

  // uncheck registering boolean
  notRegistering() {
    if (this.queries.registering) {
      this.queries.isRegister();
    }
  }
}
