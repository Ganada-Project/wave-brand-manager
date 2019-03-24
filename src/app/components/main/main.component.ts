import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { navConfigs } from "./navConfig";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public selectedType: string;
  public navConfigs: any = navConfigs;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.checkIsSelectedByUrl();
  }

  onClickNavItem({ type }) {
    this.selectedType = type;
  }

  logout() {
    this.authService.logout();
  }

  ngOnChanges(): void {
    console.log("onChange");
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  checkIsSelectedByUrl() {
    const url = location.pathname;
    const mainTypeArr = url.split("/");
    const targetType = mainTypeArr[1];
    this.selectedType = targetType;
  }

  checkLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngDoCheck() {}

  ngAfterViewInit() {
    console.log("viewinit");
  }
}
