import { Injectable } from '@angular/core';
import { ConverterService } from './converter.service';

@Injectable({
  providedIn: 'root'
})
export class UsaConverterService {
  sourceCulture = 'Europe';
  targetCulture = 'USA';

  constructor(private converterService: ConverterService) {}

  convertDistance = this.converterService.fromKilometersToMiles;
  convertTemperature = this.converterService.fromCelsiusToFarenheit;
}
