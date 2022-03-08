import {
  Component,
  Injectable,
  ChangeDetectionStrategy,
  Inject,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ContextMenuDetail,
  MainContextMenuVal,
} from './contextmenu/contextmenu.modal';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditColumnDialogComponent } from './dialog/column/edit/edit.component';
import { tableheader } from './bi-treegridheader.model';

// Interface used for representing a node of data
export interface FakeNode {
  name: string;
  children: FakeNode[];
}

const MAX_LEVELS = 3;
const MAX_NODES_PER_LEVEL = 50;

// Generates fake data
@Injectable()
export class RandomDataProvider {
  data: FakeNode[] = [];

  constructor() {
    for (let i = 0; i < MAX_NODES_PER_LEVEL; i++) {
      this.data.push(generateNode(0, i));
    }
  }
}

// Function for generating a fake data node
function generateNode(level: number, index: number): FakeNode {
  let children: FakeNode[] = [];
  if (level < MAX_LEVELS) {
    for (let i = 0; i < 4; i++) {
      children.push(generateNode(level + 1, i));
    }
  }

  return {
    name: 'level ' + level + 1+index+ ' index ' + index,
    children,
  };
}

// Interface used for representing a node of data within the flat tree component
export interface FakeFlatNode {
  name: string;
  level: number;
  hasChildren: boolean;
}

// Component containing virtual scrolling flat tree
@Component({
  selector: 'bi-treegrid',
  templateUrl: './bi-treegrid.component.html',
  styleUrls: ['./bi-treegrid.component.scss'],
  providers: [RandomDataProvider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiTreegridComponent {
  @HostListener('window:scroll', ['$event']) 
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  public viewPort: CdkVirtualScrollViewport;

  contextItem: ContextMenuDetail[] = [];
  mainContextMenu: ContextMenuDetail[] = [];
  scrolladdclass:boolean=false

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  public headeritem:tableheader[] = [
    { name: 'Col 1', id: 0, show: true, isNode: true,sticky:false },
    { name: 'Col 2', id: 1, show: true, isNode: false,sticky:false },
    { name: 'Col 3', id: 2, show: true, isNode: false,sticky:false },
    { name: 'Col 4', id: 3, show: true, isNode: false,sticky:false },
    { name: 'Col 5', id: 4, show: true, isNode: false,sticky:false },
  ];

  public showTd = [true, true, true, true];

  nodes: any[];

  persons: any[];

  public get inverseOfTranslation(): string {
    // console.log(this.viewPort)
    if (!this.viewPort || !this.viewPort['_renderedContentOffset']) {
      return '-0px';
    }
    let offset = this.viewPort['_renderedContentOffset'];
    return `-${offset}px`;
  }
  // Provided generated data
  readonly providedData = this.dataProvider.data;
  // Tree control to feed to the cdk tree
  readonly treeControl: FlatTreeControl<FakeFlatNode> =
    new FlatTreeControl<FakeFlatNode>(getNodeLevel, getIsNodeExpandable);
  // Data source fed into the cdk tree control
  readonly dataSource: MatTreeFlatDataSource<FakeNode, FakeFlatNode>;

  constructor(
    readonly dataProvider: RandomDataProvider,
    private dialog: MatDialog
  ) {
    // Tells tree data source builder how to flatten our nested node data into flat nodes
    const treeFlattener = new MatTreeFlattener<FakeNode, FakeFlatNode>(
      nodeTransformer,
      getNodeLevel,
      getIsNodeExpandable,
      getNodeChildren
    );
    // Populates our flattened data into the tree control
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      treeFlattener
    );
    this.dataSource.data = this.providedData;
    console.log(this.dataSource.data);

    this.nodes = new Array(50000).fill(null).map((item, i) => ({
      id: `${i}`,
      name: `rootDynamic${i}`,
      children: new Array(4).fill(null).map((item, n) => ({
        id: `${i}.${n}`,
        name: `rootChildDynamic${i}.${n}`,
        children: new Array(4).fill(null).map((item, n) => ({
          id: `${i}.${n}`,
          name: `rootChildDynamic${i}.${n}`,
        })),
      })),
    }));

    this.persons = [
      {
        name: 'abc 1',
        email: 'abc1@email.com',
        address: 'address 1',
      },
      {
        name: 'abc 2',
        email: 'abc2@email.com',
        address: 'address 2',
      },
    ];
    this.mainContextMenu = MainContextMenuVal;

  }

  // Number of dom nodes rendered in the virtually scrolling tree
  get numTreeNodes() {
    return document.querySelectorAll('.node').length;
  }

  // Number of dom nodes rendered in the non-virtually scrolling cdk-tree
  get numCdkTreeNodes() {
    return document.querySelectorAll('cdk-tree-node').length;
  }

  hasChild(index: number, nodeData: FakeFlatNode) {
    return getIsNodeExpandable(nodeData);
  }
  tdWidth: number;
  clickon(event) {
    var tables = document.getElementsByClassName('bar');
    if (tables) {
      this.tdWidth = event.clientX;
    }

  }


  columnsid
  rowitem

  onContextMenu(event: MouseEvent, item, actiontype) {

  //  console.log(tOLeft)
 
    this.columnsid=item.id

    this.contextItem = [];
    if(actiontype=='tbodyaction')
    {
      this.rowitem=item
    }
  

    this.mainContextMenu.forEach((e) => {
    
      if (e.actiontype == actiontype) {
        this.contextItem.push(e);
       
      } else if (e.actiontype == actiontype) {
        this.contextItem.push(e);
      }
    });

    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  onClickContextMenu(event) {
    console.log(event)
    if(event.item.label=='Freeze'){
      this.headeritem[event.value].sticky=!this.headeritem[event.value].sticky
    }
    else{
    

    let dialogRef = this.dialog.open(EditColumnDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      const headerIntemIndex = this.headeritem.findIndex(
        (item) => item.id === this.contextMenu.menuData.item['id']
      );
      
      this.headeritem[headerIntemIndex].name = result.headername;
    });

    }
   
    
  }

 displayCounter(count) {

  }
onhightlight($event, item){
  console.log(item)
this.rowitem=item

}
 
}

// Function that maps a nested node to a flat node
function nodeTransformer(node: FakeNode, level: number) {
  return {
    name: node.name,
    level,
    hasChildren: node.children.length > 0,
  };
}

// Function that gets a flat node's level
function getNodeLevel({ level }: FakeFlatNode) {
  return level;
}

// Function that determines whether a flat node is expandable or not
function getIsNodeExpandable({ hasChildren }: FakeFlatNode) {
  return hasChildren;
}

// Function that returns a nested node's list of children
function getNodeChildren({ children }: FakeNode) {
  return children;
}
