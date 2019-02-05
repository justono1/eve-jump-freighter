import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunDetailComponent } from './run-detail/run-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RunDetailComponent,
    MessagesComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
