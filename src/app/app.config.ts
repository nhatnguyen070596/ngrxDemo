import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { reducer as productReducer } from './store/reducers/product.reducer'
import { reducer as orderReducer } from './store/reducers/order.reducer';
import { reducer as scheduleReducer } from './store/reducers/shedule.reducer';
import { ProductEffects } from './store/effects/product.effects';
import { OrderEffects } from './store/effects/order.effects';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { ScheduleEffects } from './store/effects/schedule.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      products: productReducer,
      orders: orderReducer,
      schedules : scheduleReducer,
    }),
    provideHttpClient(),
    provideEffects(ProductEffects, OrderEffects,ScheduleEffects),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideClientHydration()
  ]
};
