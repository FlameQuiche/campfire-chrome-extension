import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './api.service';
import { Configuration } from './app.constants';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [APIService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
