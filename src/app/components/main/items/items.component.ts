import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  public balance: number = 365065455;

  constructor() {}

  ngOnInit() {
    console.log("item-list");
  }
}
