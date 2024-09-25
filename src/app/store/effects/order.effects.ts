import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderService } from '../../services/order.service';
import { loadOrders, loadOrdersSuccess, loadOrdersFailure } from '../actions/order.action';
import { catchError, map, switchMap, of } from 'rxjs';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private orderService: OrderService) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      switchMap(() =>
        this.orderService.getOrders().pipe(
          map(orders => loadOrdersSuccess({ orders })),
          catchError(error => of(loadOrdersFailure({ error })))
        )
      )
    )
  );
}
