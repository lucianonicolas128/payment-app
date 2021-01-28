import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { MyValidators } from 'src/app/utils/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.css'],
  providers: [PaymentService]
})
export class CheckoutCardComponent implements OnInit {

  form!: FormGroup;
  cardNumber: string = '';
  card!: Card;
  month: any;
  year: any;
  status!: string;
  save_payment: any;
  selected!: any;
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  expiredDate: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _paymentService: PaymentService
  ) {
    this.card = new Card('', '', new Date(), '', 0)
    this.buildForm();
  }

  ngOnInit(): void {
  }


  onSubmit(form: any) {
    this.status = 'loading';

    this.expiredDate = new Date(this.year, this.month, 0);
    console.log(this.expiredDate)
    this.card.expirationDate = this.expiredDate;

    console.log(this.card);
    this._paymentService.addCard(this.card);
    this.router.navigate(['./checkout']);

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      cardNumber: ['', [MyValidators.maxLengthCardNumber]],
      cardHolder: ['', [Validators.required]],
      expiredDate: [(this.month + this.year), [MyValidators.isMonthValid]],
      securityCode: [''],
      amount: ['', [Validators.required]]
    });
  }

  getCardNumber(event: any) {
    this.card.cardNumber = event.target.value;
  }

  getCardHolder(event: any) {
    this.card.cardHolder = event.target.value.toUpperCase();
  }

  getExpirationMonth(a: any) {
    document.getElementById('month')!.innerHTML = a;
    this.month = a;
  }

  getExpirationYear(a: any) {
    document.getElementById('year')!.innerHTML = a;
    this.year = a;
  }

  getSecurityCode(event: any) {
    this.card.securityCode = event.target.value;
  }

  get cardNumberField() {
    return this.form.get('cardNumber');
  }

  getAmount(event: any) {
    this.card.amount = event.target.value;
  }

}
