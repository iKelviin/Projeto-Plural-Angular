import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, ISidebarData } from './helper';
import { sidebarData } from './sidebar-data';

@Component({
  selector: 'app-sublevel-bar',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
    [@submenu]="expanded ? {value: 'visible',
       params : {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
    : {value: 'hidden',
       params : {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
    class="sublevel-bar">


      <li  *ngFor="let item of data.items" class="sublevel-bar-item">
        <a class="sublevel-bar-link"
          (click)="handleClick(item)"
          *ngIf="item.items && item.items.length > 0" >

          <button mat-button [matMenuTriggerFor]="menu" (click)="log(item)" >
            <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
            <mat-icon *ngIf="item.items && collapsed" class="menu-collapse-icon">
             chevron_right
            </mat-icon>
          </button>

          <mat-menu #menu="matMenu" >
            <ng-container *ngFor="let it of item.items" >
              
              <button mat-menu-item *ngIf="it.items && it.items.length > 0" (click)="log(it)"> 
                
              <app-sublevel-menu [data]="it" > </app-sublevel-menu>

              </button>
              <button mat-menu-item *ngIf="!isExpandable(it)" (click)="log(it)">         
                    {{it.label}}
              </button>
            </ng-container>
           

          </mat-menu>
        </a>
        <a class="sublevel-bar-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.routeLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact: true}"
        >
        <mat-icon class="sublevel-link-icon">{{item.icon}}</mat-icon>
        <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
        </a>
      </li>

    </ul>
  `,
  styleUrls: ['./sidebar.component.scss'],
  animations:[
    fadeInOut,
    trigger('submenu',[
      state('hidden',style({
        height: '0',
        overflow: 'hidden',
      })),
      state('visible',style({
        height:'*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *',animate(0))
    ])
  ]
})
export class SublevelBarComponent implements OnInit{

  @Input() data: ISidebarData = {
    routeLink: '',
    icon: '',
    label: '',
    sublevel: 0,
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
  @Input() trigger = '';

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
  }

  sideData = sidebarData;

log(item: ISidebarData){
  return console.log(item)
}
  handleClick(item:any): void {
    if(!this.multiple){
      if (this.data.items && this.data.items.length >0){
        for(let modelItem of this.data.items){
          if(item !== modelItem && modelItem.expanded){
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: ISidebarData): string {
    return item.expanded && this.router.url.includes(item.routeLink) ? 'active-sublevel' : '';
  }

  isExpandable(item: ISidebarData): boolean {
    if(item.items && item.items.length > 0){
      return true;
    }
    else{
      return false;
    }
  }
}
