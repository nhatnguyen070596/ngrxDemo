import { Action, createReducer, on } from '@ngrx/store';
import { loadOrdersSuccess } from '../actions/order.action';
import { Order } from '../../model/order.model';

export interface OrderState {
  orders: Order[];
  error: string | null;
}

export const initialOrderState: OrderState = {
  orders: [],
  error: null,
};

const orderReducer = createReducer(
  initialOrderState,
  on(loadOrdersSuccess, (state, { orders }) => ({ ...state, orders }))
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
