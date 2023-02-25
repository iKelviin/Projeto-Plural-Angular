import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  constructor(public authService: AuthenticationService){}

  
}
