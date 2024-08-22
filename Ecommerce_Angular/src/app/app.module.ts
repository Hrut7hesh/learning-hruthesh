import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { ServerComponent } from './server/server.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SquareService } from './square.service';
import { EcommercehomeComponent } from './ecommercehome/ecommercehome.component';
import { EcommerceadminComponent } from './ecommerceadmin/ecommerceadmin.component';
import { EcommercemenuComponent } from './ecommercemenu/ecommercemenu.component';
import { EcommerceaddproductComponent } from './ecommerceaddproduct/ecommerceaddproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    DynamicformComponent,
    BookComponent,
    ServerComponent,
    EcommercehomeComponent,
    EcommerceadminComponent,
    EcommercemenuComponent,
    EcommerceaddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
