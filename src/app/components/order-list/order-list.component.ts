import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadOrders } from '../../store/actions/order.action';
import { selectAllOrders } from '../../store/selectors/order.selectors';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  orders$: Observable<Order[]>;

  constructor(private store: Store) {
    this.orders$ = this.store.pipe(select(selectAllOrders));
    this.store.dispatch(loadOrders());
  }
}