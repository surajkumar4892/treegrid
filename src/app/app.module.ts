import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiTreegridModule } from './components/bi-treegrid/bi-treegrid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BiTreegridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
