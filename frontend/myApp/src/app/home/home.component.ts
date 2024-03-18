import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private productsService: ProductsService){}
  // .getProducts('https://mysite-a4ok.onrender.com/clutch', {page:0 , perPage:5})

  products: any;
  totalRecords: number = 0;
  rows: number = 12;

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('https://mysite-a4ok.onrender.com/clutch', { page, perPage })
      .subscribe({
        next: (data: Products) => {
          this.products = data
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
    ngOnInit() {
      this.fetchProducts(0, this.rows);
    }
  }

