import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommercemenu',
  templateUrl: './ecommercemenu.component.html',
  styleUrl: './ecommercemenu.component.css'
})
export class EcommercemenuComponent {
  menuItems = [
    { path: '/', title: 'Home' },
    { path: '/admin', title: 'Admin' },
    { path: '/addproduct', title: 'Add Product' }
  ];
}
