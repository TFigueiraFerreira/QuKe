import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, InfiniteScrollModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

