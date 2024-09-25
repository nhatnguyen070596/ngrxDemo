import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    // Mock data
    const data: Product[] = [
      { id: 0, name: 'Number 0',price : 10 },
      { id: 1, name: 'Number 1',price : 10 },
    ];

    // Return mock data as an Observable
    return of(data);
  }
}