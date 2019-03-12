import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';
import { ObseratesComponent } from './obserates/obserates.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuditInterceptorService } from './audit-interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: RatesComponent
  },
  {
    path: 'observables',
    component: ObseratesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuditInterceptorService,
    multi: true
    }
  ]
})
export class RatesRoutingModule { }
