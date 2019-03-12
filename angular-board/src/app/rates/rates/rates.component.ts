import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styles: []
})
export class RatesComponent implements OnInit {

  private urlapi = 'https://api.exchangeratesapi.io/latest';
  private myRatesApi = 'https://api-base.herokuapp.com/api/pub/rates';
  public currentEuroRates: any = null;
  public myRates: any[] = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCurrentEuroRates();
  }

  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.urlapi}?symbols=${currencies}`;
    // apiResult = parametro de exito en API, => cuando se ejecute, realiza la accion entre parentesis
    this.httpClient.get(url).subscribe(apiResult => (this.currentEuroRates = apiResult));
  }

  public postRates() {
    const rates = this.transformData();
    rates.forEach(rate =>
      // Ruta y dato a enviar
    this.httpClient.post(this.myRatesApi, rate).subscribe()
    );
  }

  private transformData() {
    const current = this.currentEuroRates.rates;
    return Object.keys(current).map(key => ({
      date: this.currentEuroRates.date,
      currency: key,
      euros: current[key]
    }));
  }

  public getMyRates() {
    // get<tipo de dato que espero>
    this.httpClient.get<any[]>(this.myRatesApi).subscribe(apiResult => (this.myRates = apiResult));
  }

  public deleteMyRates() {
    this.httpClient.delete(this.myRatesApi).subscribe();
  }
}
