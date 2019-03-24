import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { navConfigs } from './navConfig';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public selectedType: string;
  public navConfigs: any = navConfigs;
  constructor(private authService: AuthService) { }

  ngOnInit() {
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

  checkLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngDoCheck() {}

  ngAfterViewInit() {
    console.log("viewinit");
  }
}
