import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public level: number = 10;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    console.log("develop branch");
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
}
