import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { navConfigs } from "./navConfig";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public level: number = 10;
  public navConfigs: any = navConfigs;
  public selectedType: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkIsSelectedByUrl();
  }

  checkIsSelectedByUrl() {
    const { url } = this.router;
    const mainTypeArr = url.split("/");
    const targetType = mainTypeArr[2];
    if (!targetType) {
      this.selectedType = "dashboard";
    } else {
      this.selectedType = targetType;
    }
  }

  onClickNavItem({ type }) {
    this.selectedType = type;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
}
