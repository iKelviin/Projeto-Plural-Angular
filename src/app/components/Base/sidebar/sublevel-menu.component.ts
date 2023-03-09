import { Component, Input } from '@angular/core';
import { ISidebarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template:`
  
          <button mat-menu-item [matMenuTriggerFor]="menu">
                <span (click)="log(data)">{{data.label}}</span>
          </button>

          <mat-menu #menu="matMenu" >
            <ng-container *ngFor="let it of data.items" >
              
              <button mat-menu-item *ngIf="it.items && it.items.length > 0" (click)="log(it)"> 
                
              <app-sublevel-menu [data]="it" > </app-sublevel-menu>

              </button>
              <button mat-menu-item *ngIf="!isExpandable(it)" (click)="log(it)">         
                    {{it.label}}
              </button>
            </ng-container>
           

          </mat-menu>

          <!--mat-menu #menu="matMenu">
            <ng-container *ngFor="let item of data.items">
              <button mat-menu-item>
                <app-sublevel-menu
                  [data]="item"
                  *ngIf="isExpandable(item); else menuItem"
                >
                </app-sublevel-menu>
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
  
log(item: ISidebarData){
  return console.log(item)
}

}
