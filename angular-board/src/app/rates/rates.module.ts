import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates/rates.component';
import { ObseratesComponent } from './obserates/obserates.component';

@NgModule({
  declarations: [RatesComponent, ObseratesComponent],
  imports: [
    CommonModule,
    RatesRoutingModule,
    HttpClientModule
  ]
})
export class RatesModule { }
