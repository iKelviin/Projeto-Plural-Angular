import { Component, Input } from '@angular/core';
import { ISidebarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template:`
  <!--
          <button mat-button [matMenuTriggerFor]="menu">
            <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{data.label}}</span>
            <mat-icon *ngIf="data.items && collapsed" class="menu-collapse-icon">
             chevron_right
            </mat-icon>
          </button>

          <mat-menu #menu="matMenu">
            <ng-container *ngFor="let item of data.items">
              <button mat-menu-item>
                <app-sublevel-menu
                  *ngIf="isExpandable(item); else menuItem"
                >
                </app-sublevel-menu>
                <!--
                <span *ngIf="!isExpandable(item)">{{item.label}}</span>
                <span *ngIf="isExpandable(item)">{{item.label}}</span>
                <mat-icon *ngIf="isExpandable(item)" class="menu-collapse-icon-popup">
                chevron_right
                </mat-icon>
              </button>
            </ng-container>
            <ng-template #menuItem>
              <ng-container *ngFor="let item of data.items"
              >
                <button mat-menu-item>
                    {{item.label}}
                </button>
            </ng-container>
            </ng-template>


          </mat-menu-->
          <button mat-menu-item [matMenuTriggerFor]="menu">
                <span *ngIf="!isExpandable(data)">{{data.label}}</span>
                <span *ngIf="isExpandable(data)">{{data.label}}</span>

          </button>

          <mat-menu #menu="matMenu">
            <ng-container *ngFor="let item of data.items">
              <button mat-menu-item>
                <app-sublevel-menu
                  [data]="item"
                  *ngIf="isExpandable(item); else menuItem"
                >
                </app-sublevel-menu>
                <!--
                <span *ngIf="!isExpandable(item)">{{item.label}}</span>
                <span *ngIf="isExpandable(item)">{{item.label}}</span>
                <mat-icon-- *ngIf="isExpandable(item)" class="menu-collapse-icon-popup">
                chevron_right
                </mat-icon-->
              </button>
            </ng-container>
            <ng-template #menuItem>
              <ng-container *ngFor="let item of data.items"
              >
                <button mat-menu-item>
                    {{item.label}}
                </button>
            </ng-container>
            </ng-template>


          </mat-menu>
  `
})
export class SublevelMenuComponent {


  @Input() data: ISidebarData = {
    routeLink: '',
    icon: '',
    label: '',
    sublevel: 0,
    items: []
  }
  @Input() collapsed = false;

  isExpandable(item: ISidebarData): boolean {
    if(item.items && item.items.length > 0){
      return true;
    }
    else{
      return false;
    }
  }

}
