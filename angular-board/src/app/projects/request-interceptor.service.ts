import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { RequestStoreService } from './request-store.service';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private requestStore: RequestStoreService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      //window.alert('Intercepta');
      const mensaje = req.method + ' ruta="' + req.url + '" ; datos:' + JSON.stringify(req.body);
      console.log(mensaje);
      this.requestStore.dispatch(mensaje);
      return next.handle(req);
  }

}
