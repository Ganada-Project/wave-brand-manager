import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  public balance: number = 365065455;

  constructor(public router: Router) {}

  ngOnInit() {
    console.log("item-list");
  }
}
