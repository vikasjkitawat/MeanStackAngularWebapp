import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductentryComponent } from './components/productentry/productentry.component';
import { ReportComponent } from './components/report/report.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from "@angular/common/http";
import { EShopModule } from './eshop.module';
import { AppRoutes } from './routes/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule, // required for ngModel
    HttpClientModule,
    //EShopModule, // Feature Module
    RouterModule.forRoot(AppRoutes) // RouterModule > Router Service
  ],
  providers: [
    DataService // var singletonInstance = new DataService()
  ], // Service Layer
  bootstrap: [AppComponent] // new AppComponent()
})
export class AppModule { }
