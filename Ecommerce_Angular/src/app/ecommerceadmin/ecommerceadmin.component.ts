import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Category {
  status: boolean;
  _id: string;
  name: string;
  description: string;
  created_at: string;
  __v: number;
}

@Component({
  selector: 'app-ecommerceadmin',
  templateUrl: './ecommerceadmin.component.html',
  styleUrl: './ecommerceadmin.component.css'
})
export class EcommerceadminComponent implements OnInit {
  categories: Category[] = [];
  apiUrl: string = 'http://localhost:3000/api/v1/categories';

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.http.get<{categories: Category[]}>(this.apiUrl).subscribe(
      (response) => {
        this.categories = response.categories;
        console.log(this.categories);
      },
      (error) => {
        console.error("Error fetching categories:", error);
      }
    );
  }
}
