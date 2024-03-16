import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-data',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
 } )
export class DisplayDataComponent {
  categories: string[] = [];
  errorMessage: string | null = null

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<string[]>('https://dummyjson.com/products/categories')
      .pipe(
        catchError(error => {
          this.errorMessage = 'Error fetching categories.'; 
          console.error('Error fetching categories:', error);
          return of([]); // Handle errors gracefully
        })
      )
      .subscribe(categories => this.categories = categories); 
  }
  formatCategory(category: string): string {
    return category.replace('-', ' '); // Replace hyphens with spaces
  }
}
