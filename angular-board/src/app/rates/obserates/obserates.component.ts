import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, tap } from 'rxjs/operators';

@Component({
  selector: 'app-obserates',
  templateUrl: './obserates.component.html',
  styles: []
})
export class ObseratesComponent implements OnInit {

  private ratesApi = 'https://api.exchangeratesapi.io/latest';
  public currentEuroRates$: Observable<any> = null;
  public myRates$: Observable<any[]> = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCurrentEuroRates();
  }
  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.ratesApi}?symbols=${currencies}`;
    // Al estar programado en la vista con un pipe, puedo prescindir de la suscripcion
    // , al utilizar share, comparto los datos de la llamada con cualquier otra suscrita
    this.currentEuroRates$ = this.httpClient.get(url).pipe(share());
    // El operador tap, permite ver los datos del pipe pero no cambiarlos
    // El operador map, permite trabajar con los datos del pipe
    this.myRates$ = this.currentEuroRates$.pipe(
      tap(d => console.log(d)),
      map(this.transformData),
      tap(t => console.log(t)));
  }

  private transformData(currentRates) {
    const current = currentRates.rates;
    return Object.keys(current).map(key => ({
    date: currentRates.date,
    currency: key,
    euros: current[key]
    }));
  }

}
