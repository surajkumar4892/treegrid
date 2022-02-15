import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiTreegridComponent } from './bi-treegrid.component';
import { BiColumnsComponent } from '../bi-columns/bi-columns.component';
import { BiColumnComponent } from '../bi-column/bi-column.component';
import { DemoMaterialModule } from 'src/app/material/material.module';
@NgModule({
  declarations: [BiTreegridComponent, BiColumnsComponent, BiColumnComponent],
  imports: [CommonModule, DemoMaterialModule],
  exports: [BiTreegridComponent, BiColumnsComponent, BiColumnComponent],
})
export class BiTreegridModule {}
