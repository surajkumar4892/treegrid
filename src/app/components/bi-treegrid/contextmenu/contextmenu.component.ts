import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { tableheader } from '../bi-treegridheader.model';
import { ContextMenuDetail } from './contextmenu.modal';

@Component({
  selector: 'bi-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss'],
})
export class ContextmenuComponent implements OnInit, OnChanges {
  @Input() contextMenu: Array<ContextMenuDetail> = [];
 @Input() colmuid:number
 @Input() colmuidheder
  @Output() contextMenuVal: EventEmitter<any> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.colmuid)
  }

  onButtonClick(item: ContextMenuDetail) {
   
   let contextvalue={item,'value':this.colmuid}
    console.log()
    this.contextMenuVal.emit(contextvalue);
  }
}
