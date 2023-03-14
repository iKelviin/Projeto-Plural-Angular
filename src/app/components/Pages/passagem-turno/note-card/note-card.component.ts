import { Component, ElementRef, AfterViewInit, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() body!: string;


  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;
  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"),10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
      this.renderer.setStyle(this.truncator.nativeElement,'display','block');
    }else{
      this.renderer.setStyle(this.truncator.nativeElement, 'display','none');
    }
  }
}
