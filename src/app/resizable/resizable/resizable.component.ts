import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'th[resizable]',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.scss'],
})
export class ResizableComponent {
  @Input() allwidth: number;
  @HostBinding('style.width.px')
  width: number | null = null;

  onResize(width: any) {
    this.width = width;
    console.log(width);
    this.allwidth = width;
  }
}
