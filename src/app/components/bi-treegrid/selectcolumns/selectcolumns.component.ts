import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { tableheader } from '../bi-treegridheader.model';

@Component({
  selector: 'app-selectcolumns',
  templateUrl: './selectcolumns.component.html',
  styleUrls: ['./selectcolumns.component.scss']
})
export class SelectcolumnsComponent implements OnInit {
  @Input() columns: tableheader[] = []
  @Output() valueChange = new EventEmitter();
  masterSelected: boolean=true
  counter
  searchcolumns: tableheader
  searchitem

  constructor() { }

  ngOnInit(): void {
    //z this.columns.splice(0,1)

  }

  searchText: string;
  checkUncheckAll() {
    for (var id = 1; id < this.columns.length; id++) {
      this.columns[id].show = this.masterSelected;
    }

  }

  isAllSelected(item) {
    this.valueChange.emit(item.show);
    this.masterSelected = item.show
  }

}
