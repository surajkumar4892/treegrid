import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgModule,
  Optional,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[stickyTable]',
})
export class StickyTableDirective {
  constructor(private el: ElementRef) {}

  get x() {
    return (this.el.nativeElement as HTMLElement)?.getBoundingClientRect()?.x;
  }
}

@Directive({
  selector: '[sticky]',
})
export class StickyDirective implements AfterViewInit {
  @Input() set sticky(shouldHide: boolean) {
    if(shouldHide==true){
      const el = this.el.nativeElement as HTMLElement;
    const { x } = el.getBoundingClientRect();
    el.style.position = 'sticky';
    console.log('this.table.x', this.table.x);
    el.style.left = this.table ? `${x - this.table.x}px` : '0px';
    }
//     (shouldHide) ? this.renderer2.setStyle(this.el.nativeElement, 'visibility', 'hidden')
// : this.renderer2.removeStyle(this.el.nativeElement, 'visibility');
}


  constructor(
    private el: ElementRef,private renderer2: Renderer2,
    @Optional() private table: StickyTableDirective
  ) {}

  ngAfterViewInit() {
    
  }
}

@NgModule({
  declarations: [StickyDirective, StickyTableDirective],
  imports: [CommonModule],
  exports: [StickyDirective, StickyTableDirective],
})
export class StickyDirectiveModule {}
