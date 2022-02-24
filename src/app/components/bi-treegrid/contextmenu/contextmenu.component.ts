import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ContextMenuDetail } from './contextmenu.modal';

@Component({
  selector: 'bi-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss'],
})
export class ContextmenuComponent implements OnInit, OnChanges {
  @Input() contextMenu: Array<ContextMenuDetail> = [];
  @Output() contextMenuVal: EventEmitter<ContextMenuDetail> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  onButtonClick(item: ContextMenuDetail) {
    this.contextMenuVal.emit(item);
  }
}
