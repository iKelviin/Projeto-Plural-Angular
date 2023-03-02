import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ISidebarData } from './helper';
import { sidebarData } from './sidebar-data';

interface SideBarToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter',[
        style({opacity: 0}),
        animate('1000ms',
        style({opacity: 1})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)',offset: '0'}),
          style({transform: 'rotate(2turn)',offset: '1'})
        ]))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit{

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideBar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  @Output() onToggleSideBar: EventEmitter<SideBarToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  sideData = sidebarData;
  multiple: boolean = false;


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideBar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSideBar(): void {
    this.collapsed = false;
    this.onToggleSideBar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: ISidebarData): void {
    if(!this.multiple){
      for(let modelItem of this.sideData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded
  }
}
