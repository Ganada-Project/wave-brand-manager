import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { QueriesService } from "../services/queries.service";
import { Router } from "@angular/router";
import { navConfigs } from "./navConfig";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public selectedType: string;
  public navConfigs: any = navConfigs;

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
    // this.loggedIn = this.authService.isLoggedIn();
  }

  ngDoCheck() {}

  ngAfterViewInit() {
    console.log("viewinit");
    // this.loggedIn = this.authService.isLoggedIn();
  }
}
