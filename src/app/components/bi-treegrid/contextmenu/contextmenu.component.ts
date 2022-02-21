import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { contextmenudetail } from './contextmenu.modal';

@Component({
  selector: 'bi-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss'],
})
export class ContextmenuComponent implements OnInit, OnChanges {
  @Input() contextmenu: Array<contextmenudetail> = [];

  constructor() {}

  ngOnInit(): void {}
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.contextmenu);
  }
}
