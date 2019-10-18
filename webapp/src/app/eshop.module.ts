import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EshopComponent } from './components/eshop/eshop.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductentryComponent } from './components/productentry/productentry.component';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
import { EShopRoutes } from './routes/eshop.routes';

// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { EshopComponent } from './components/eshop/eshop.component';
// import { ProductlistComponent } from './components/productlist/productlist.component';
// import { ProductentryComponent } from './components/productentry/productentry.component';
// import { ReportComponent } from './components/report/report.component';
// import { DataService } from './services/data.service';
// import { HttpClientModule } from "@angular/common/http";
// import { CommonModule } from '@angular/common';

@NgModule(
  {

    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forChild(EShopRoutes)
    ],
    declarations: [
      EshopComponent,
      ProductlistComponent,
      ProductentryComponent
    ],
    providers: [
      DataService
    ],
    exports :
    [
      EshopComponent
    ]
  })
export class EShopModule { }
