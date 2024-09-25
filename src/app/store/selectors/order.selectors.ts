import { createSelector } from '@ngrx/store';
import { OrderState } from '../reducers/order.reducer';

export const selectOrdersState = (state: any) => state.orders;

export const selectAllOrders = createSelector(
  selectOrdersState,
  (state: OrderState) => state.orders
);
