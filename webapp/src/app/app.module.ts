import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // required for ngModel
  ],
  //providers: [], // Service Layer
  bootstrap: [AppComponent] // new AppComponent()
})
export class AppModule { }
