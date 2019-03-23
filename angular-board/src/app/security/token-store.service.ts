import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {
  //variable privada para uso interno
  private token = '';
  //produccion de un observable
  private token$ = new BehaviorSubject<string>('');

  constructor() { }

  //expongo el observable de Behavior
  public select$ = () => this.token$.asObservable();

  public dispatch(token){
    this.token = token;
    this.token$.next(this.token);
  }
}
