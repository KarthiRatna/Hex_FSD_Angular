import { Directive, ElementRef, Renderer2, Input, ɵConsole, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() Highlightedcolor:string="black";

  constructor(private el:ElementRef,private renderer:Renderer2) {
    //renders  before dom LOAD. does not load the binding values
    console.log("From Constructor :"+ this.Highlightedcolor);
     }
   ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,"color",this.Highlightedcolor);
    console.log("From OnInit :"+ this.Highlightedcolor);
   }

   @HostListener("mouseenter")
   applycolor(){
    this.renderer.setStyle(this.el.nativeElement,"background-color","green");
   }
   @HostListener("mouseleave")
   removecolor(){
    this.renderer.setStyle(this.el.nativeElement,"background-color","yellow");
   }

}
