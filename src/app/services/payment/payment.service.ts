import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../../models/card';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private cards: Card[] = [];
  private cardsPayments = new BehaviorSubject<Card[]>([]);
  cardsPayments$ = this.cardsPayments.asObservable();

  constructor(
    private _http: HttpClient,
  ) {
    
  }

  savePayment(card: Card): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(card);

    return this._http.post(`${environment.url_api}/checkout`, params, { headers: headers });
  }

  addCard(card: Card) {
    this.cards = [...this.cards, card];
    this.cardsPayments.next(this.cards);
  }

}
