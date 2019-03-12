import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuditInterceptorService implements HttpInterceptor{

  constructor() { }

  public intercept(
    // recibe
    req: HttpRequest<any>,
    // envia al siguiente control
    next: HttpHandler )
    : Observable<HttpEvent<any>> {
      const started = Date.now();
      return next.handle(req).pipe(
      // Filter, filtra pero no detiene el flujo, permite la ejecucion de los siguiente solo a lo que cumpla el filtro
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.auditEvent(resp, started))
      );
  }

  private auditEvent(resp: HttpResponse<any>, started: number) {
    const elapsedMs = Date.now() - started;
    const eventMessage = resp.statusText + ' on ' + resp.url;
    const message = eventMessage + ' in ' + elapsedMs + 'ms';
    console.log(message);
  }
}
