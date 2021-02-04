import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { YugiohComponent } from "./pages/examples/yugioh/yugioh.component";
import { GenshinComponent } from "./pages/examples/genshin/genshin.component";
import { TftComponent } from "./pages/examples/tft/tft.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "yugioh", component: YugiohComponent },
  { path: "genshin", component: GenshinComponent },
  { path: "tft", component: TftComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
