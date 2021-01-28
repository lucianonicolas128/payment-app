import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card';
import { PaymentService } from '../../services/payment/payment.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cards$: Observable<Card[]>;
  displayedColumns: string[] = ['cardNumber', 'cardHolder', 'amount'];



  constructor(private paymentService: PaymentService){
    this.cards$ = this.paymentService.cardsPayments$;
  }

  ngOnInit(): void {
    
  }

}
