import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-profilepage",
  templateUrl: "yugioh.component.html"
})
export class YugiohComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
