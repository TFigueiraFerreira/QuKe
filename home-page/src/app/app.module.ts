import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfiniteScrollModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

