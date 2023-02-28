import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UsersService } from './services/Users/users.service';

interface SideBarToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('transformMenu', [
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition('void <=> *', [
        animate(200)
      ])
    ])
  ]
})
export class AppComponent {

  user$ = this.usersService.currentUserProfile$;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private usersService: UsersService
    ){}

  isSideBarCollapsed = false;
  screenWidth= 0;

  onToggleSideBar(data: SideBarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideBarCollapsed = data.collapsed;
  }
}
