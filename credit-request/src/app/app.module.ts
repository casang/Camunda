import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormCreditRequestComponent } from './credit-request.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCreditRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [FormCreditRequestComponent]
})
export class AppModule { }
