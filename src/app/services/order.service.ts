import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    // Mock data
    const data: Order[] = [
      {  
        id: 10,
        productId: 10,
        quantity: 10 }
    ];

    // Return mock data as an Observable
    return of(data);
  }
}