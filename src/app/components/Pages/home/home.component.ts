import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user$ = this.usersService.currentUserProfile$;

  constructor(private usersService: UsersService){}
}
