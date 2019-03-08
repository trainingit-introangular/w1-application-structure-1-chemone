import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { CultureConverterComponent } from './culture-converter/culture-converter.component';
import { CultureConverterService } from './culture-converter.service';
import { UsaConverterService } from './usa-converter.service';

const routes: Routes = [
  {
    path: '',
    component: ConverterComponent
  },
  {
    path: 'culture',
    component: CultureConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule { }
