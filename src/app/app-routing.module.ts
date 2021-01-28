import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutCardComponent } from './components/checkout-card/checkout-card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'checkout-payment',
    component: CheckoutCardComponent,
    data: {animation: 'checkoutPayment'}
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: {animation: 'checkout'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
