import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-column',
  templateUrl: './bi-column.component.html',
  styleUrls: ['./bi-column.component.scss'],
})
export class BiColumnComponent implements OnInit {
  constructor() {}
  public data: string[] = ['test1', 'test2', 'test3', 'test4'];
  ngOnInit(): void {}
}
