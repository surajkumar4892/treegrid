import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiTreegridComponent } from './bi-treegrid.component';
import { BiColumnsComponent } from '../bi-columns/bi-columns.component';
import { BiColumnComponent } from '../bi-column/bi-column.component';
import { DemoMaterialModule } from 'src/app/material/material.module';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { EditColumnDialogComponent } from './dialog/column/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameColumnDialogComponent } from './dialog/column/name/name.component';
import { ResizableModule } from 'src/app/resizable/resizable.module';
import { SelectcolumnsModule } from './selectcolumns/selectcolumns.module';

@NgModule({
  declarations: [
    BiTreegridComponent,
    BiColumnsComponent,
    BiColumnComponent,
    ContextmenuComponent,
    EditColumnDialogComponent,
    NameColumnDialogComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ResizableModule,
    SelectcolumnsModule
    
  ],
  exports: [BiTreegridComponent, BiColumnsComponent, BiColumnComponent],
})
export class BiTreegridModule {}
