import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { BookComponent } from './book/book.component';
import { EcommerceadminComponent } from './ecommerceadmin/ecommerceadmin.component';
import { EcommercehomeComponent } from './ecommercehome/ecommercehome.component';
import { EcommerceaddproductComponent } from './ecommerceaddproduct/ecommerceaddproduct.component';
import { EcommercemenuComponent } from './ecommercemenu/ecommercemenu.component';

const routes: Routes = [
  {
    path:"helloworld",
    title:"Hello world",
    component:HelloworldComponent,
  },
  {
    path:"dynamicform",
    title:"dynamicform",
    component:DynamicformComponent,
  },
  {
    path: "book/:bookId",
    title: "Book",
    component: BookComponent,
    data : {pageInfo: "Sample Book page"}
  },
  {
    path: "admin",
    title: "eadmin",
    component: EcommerceadminComponent
  },
  {
    path: "",
    title: "ehome",
    component: EcommercehomeComponent
  },
  {
    path: "addproduct",
    title: "eaddproduct",
    component: EcommerceaddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
