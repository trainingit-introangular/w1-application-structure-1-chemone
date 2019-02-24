import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagValueComponentComponent } from './tag-value-component/tag-value-component.component';

@NgModule({
  declarations: [TagValueComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [TagValueComponentComponent]
})
export class SharedModule { }
