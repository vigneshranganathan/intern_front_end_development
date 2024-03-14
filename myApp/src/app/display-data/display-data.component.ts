import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-display-data', 
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
 } )
export class DisplayDataComponent implements OnInit {
  categories: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.http.get<string[]>('https://dummyjson.com/products/categories')
      .pipe(
        catchError(error => {
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
