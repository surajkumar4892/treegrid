import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { dataSource, virtualData } from 'src/app/helper/dataset';
import { TableVirtualScrollStrategy } from 'src/app/virtual-scroll/virtual-scroll.strategy';

const PAGESIZE = 20;
const ROW_HEIGHT = 48;

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
})
export class BiTreegridComponent implements AfterViewInit {
  displayedColumns: string[] = ['TaskID', 'FIELD1'];
  //displayedColumns: string[] = ['id', 'name', 'age'];

  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

  public fullDatasource: dataSetNode[];

  static BUFFER_SIZE = 3;
  rowHeight = 48;
  headerHeight = 56;

  gridHeight = 400;

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

  constructor() {
    dataSource();

    this.fullDatasource = virtualData;
    this.dataSource.data = this.fullDatasource.slice(0, 10);
    console.log(this.treeControl);
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngAfterViewInit() {
    this.virtualScroll.renderedRangeStream.subscribe((range) => {
      console.log(range, this.fullDatasource.slice(range.start, range.end));
      this.dataSource.data = this.fullDatasource.slice(range.start, range.end);
    });
  }

  onlClick(data?: any) {
    console.log(data);
    console.log(this.treeControl.expandAll());
    this.treeControl.expandAll();
    this.treeControl.toggle(data);
  }
}
