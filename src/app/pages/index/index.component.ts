import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
declare const TradingView: any;

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  moonCounter = 0;
  believer = false;
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngAfterViewInit() {
    new TradingView.widget(
      {
      "width": 980,
      "height": 610,
      "symbol": "NYSE:GME",
      "interval": "D",
      "timezone": "America/New_York",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "allow_symbol_change": true,
      "container_id": "tradingview_d1dd8"
    }
      );
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  goToMoon() {
    this.moonCounter = this.moonCounter + 1;
    if(this.moonCounter > 10) {
      this.believer = true;
    }
  }
}
