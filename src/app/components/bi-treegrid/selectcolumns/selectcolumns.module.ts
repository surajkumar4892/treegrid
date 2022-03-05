import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectcolumnsComponent } from './selectcolumns.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    SelectcolumnsComponent, FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    SelectcolumnsComponent,
    FilterPipe
  ]

})
export class SelectcolumnsModule { }
