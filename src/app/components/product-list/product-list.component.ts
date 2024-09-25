import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllProducts } from '../../store/selectors/product.selectors';
import { loadProducts } from '../../store/actions/product.action';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.pipe(select(selectAllProducts));
    this.store.dispatch(loadProducts());
    console.log(this.products$);
  }
}
