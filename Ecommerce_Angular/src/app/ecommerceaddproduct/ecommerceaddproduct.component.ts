import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Category {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-ecommerceaddproduct',
  templateUrl: './ecommerceaddproduct.component.html',
  styleUrl: './ecommerceaddproduct.component.css'
})
export class EcommerceaddproductComponent implements OnInit{
  productForm: FormGroup;
  categories: Category[] = [];
  apiUrlCategories = 'http://localhost:3000/api/v1/categories';
  apiUrlProducts = 'http://localhost:3000/api/v1/products';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      code: [''],
      name: [''],
      excerpt: [''],
      description: [''],
      category: [''],
      price: [''],
      stock: ['']
    });
  }

  ngOnInit(){
    this.fetchCategories();
  }

  fetchCategories(){
    this.http.get<{ categories: Category[] }>(this.apiUrlCategories).subscribe(
      response => {
        this.categories = response.categories;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onSubmit(){
    if (this.productForm.valid) {
      this.http.post(this.apiUrlProducts, this.productForm.value).subscribe(
        response => {
          alert('Product successfully added!');
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error adding product:', error);
          alert('Failed to add product. Please try again.');
        }
      );
    } else {
      alert('Please correct the errors in the form.');
    }
  }
}
