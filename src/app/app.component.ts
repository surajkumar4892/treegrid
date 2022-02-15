import { Component, OnInit, ViewChild } from '@angular/core';
import { BiColumnComponent } from './components/bi-column/bi-column.component';
import { dataSource, virtualData } from './helper/dataset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(BiColumnComponent) private biColumn!: BiColumnComponent;
  title = 'tree-grid';
  public data: Object[];

  ngOnInit(): void {
    dataSource();
    this.data = virtualData;
  }

  ngAfterViewInit() {
    setInterval(() => {}, 0);
  }
}
