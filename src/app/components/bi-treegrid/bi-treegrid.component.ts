import {
  CdkVirtualScrollViewport,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dataSource, virtualData } from 'src/app/helper/dataset';
import { GridTableDataSource } from 'src/app/virtual-scroll/grid-datasource';
import { CustomVirtualScrollStrategy } from 'src/app/virtual-scroll/virtual-scroll.strategy';

interface dataSetNode {
  TaskID: number;
  FIELD1: string;
  FIELD2: number;
  FIELD3: number;
  FIELD4: number;
  FIELD5: number;
  Crew?: dataSetNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  TaskID: number;
  FIELD1: string;
  FIELD2: number;
  FIELD3: number;
  FIELD4: number;
  FIELD5: number;
  level: number;
}

@Component({
  selector: 'bi-treegrid',
  templateUrl: './bi-treegrid.component.html',
  styleUrls: ['./bi-treegrid.component.scss'],
  providers: [
    { provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy },
  ],
})
export class BiTreegridComponent<T> implements OnInit {
  displayedColumns: string[] = ['TaskID', 'FIELD1'];
  //displayedColumns: string[] = ['id', 'name', 'age'];
  public data: dataSetNode[];

  rows = Array(200)
    .fill(0)
    .map((x, i) => {
      return { name: 'name' + i, id: i, age: 27 };
    });

  public data_: any[] = [];

  private transformer = (node: dataSetNode, level: number) => {
    return {
      expandable: !!node.Crew && node.Crew.length > 0,
      TaskID: node.TaskID,
      FIELD1: node.FIELD1,
      FIELD2: node.FIELD2,
      FIELD3: node.FIELD3,
      FIELD4: node.FIELD4,
      FIELD5: node.FIELD5,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.Crew
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  pending: boolean;
  sticky = false;
  itemSize = 100;

  offset: Observable<number>;
  visibleColumns: any[];
  _alldata: any[];

  placeholderHeight = 0;

  page = 1;
  pageSize = 10;

  constructor() {}

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    dataSource();
    this.data = virtualData;
    this.dataSource.data = this.data;
  }
}
