import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Category {
  status: boolean;
  _id: string;
  name: string;
  description: string;
  created_at: string;
  __v: number;
}

interface Product {
  status: boolean;
  _id: string;
  code: string;
  name: string;
  excerpt: string;
  description: string;
  price: number;
  stock: number;
  category: Category;
  created_at: string;
  __v: number;
}

@Component({
  selector: 'app-ecommercehome',
  templateUrl: './ecommercehome.component.html',
  styleUrls: ['./ecommercehome.component.css']
})
export class EcommercehomeComponent implements OnInit {
  products: Product[] = [];
  apiUrl: string = 'http://localhost:3000/api/v1/products';

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.http.get<{ products: Product[] }>(this.apiUrl).subscribe(
      (response) => {
        this.products = response.products;
        console.log(this.products);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }
}
