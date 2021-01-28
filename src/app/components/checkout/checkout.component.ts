import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Card } from '../../models/card';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cards$: Observable<Card[]>;

  constructor(private paymentService: PaymentService,
    private router: Router) {
    this.cards$ = this.paymentService.cardPayment$;
    console.log(this.cards$);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
    
  }


}
