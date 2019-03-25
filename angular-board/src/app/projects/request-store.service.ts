import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestStoreService {
  private request = '';
  private request$ = new BehaviorSubject<string>('');

  constructor() {}

  public select$ = () => this.request$.asObservable();

  public dispatch(request) {
    //window.alert(request);
    this.request = request;
    this.request$.next(this.request);
  }
}
