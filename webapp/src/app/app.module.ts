import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductentryComponent } from './components/productentry/productentry.component';
import { ReportComponent } from './components/report/report.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EshopComponent,
    ProductlistComponent,
    ProductentryComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // required for ngModel
    HttpClientModule
  ],
  providers: [
    DataService // var singletonInstance = new DataService()
  ], // Service Layer
  bootstrap: [AppComponent] // new AppComponent()
  //bootstrap: [AppComponent, EshopComponent] // new AppComponent()
})
export class AppModule { }
