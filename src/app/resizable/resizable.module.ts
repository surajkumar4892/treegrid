import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableComponent } from './resizable/resizable.component';
import { ResizableDirective } from './resizable/resizable.directive';

@NgModule({
  declarations: [ResizableComponent, ResizableDirective],
  imports: [CommonModule],
  exports: [ResizableComponent],
})
export class ResizableModule {}
